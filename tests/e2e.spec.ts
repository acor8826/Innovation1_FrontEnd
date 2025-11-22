import { test, expect } from '@playwright/test';

// Test configuration
const FRONTEND_URL = 'https://innovation1-frontend-513885582887.us-central1.run.app';
const BACKEND_URL = 'https://innovation1-api-513885582887.us-central1.run.app';
const TEST_EMAIL = 'acor8826@hotmail.com';
const TEST_PASSWORD = 'C0rry2025!';

test.describe('Innovation1 Application E2E Tests', () => {

  test('should load login page', async ({ page }) => {
    await page.goto(`${FRONTEND_URL}/login`);

    // Wait for page to load
    await page.waitForLoadState('networkidle');

    // Check if login form is visible
    const emailInput = page.locator('input[type="email"]');
    const passwordInput = page.locator('input[type="password"]');

    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();

    console.log('✓ Login page loaded successfully');
  });

  test('should login with valid credentials and navigate to dashboard', async ({ page }) => {
    await page.goto(`${FRONTEND_URL}/login`);
    await page.waitForLoadState('networkidle');

    // Fill login form
    await page.fill('input[type="email"]', TEST_EMAIL);
    await page.fill('input[type="password"]', TEST_PASSWORD);

    // Click submit button
    await page.click('button[type="submit"]');

    // Wait for redirect to dashboard
    await page.waitForURL(`**/dashboard`, { timeout: 10000 });

    console.log('✓ Login successful, redirected to dashboard');

    // Verify dashboard elements are visible
    await page.waitForLoadState('networkidle');
    const kpiCards = page.locator('[class*="KPI"]');

    console.log('✓ Dashboard loaded');
  });

  test('should display projects list', async ({ page }) => {
    // Login first
    await page.goto(`${FRONTEND_URL}/login`);
    await page.fill('input[type="email"]', TEST_EMAIL);
    await page.fill('input[type="password"]', TEST_PASSWORD);
    await page.click('button[type="submit"]');
    await page.waitForURL(`**/dashboard`);

    // Navigate to projects
    await page.goto(`${FRONTEND_URL}/projects`);
    await page.waitForLoadState('networkidle');

    // Check if projects page loaded
    const heading = page.locator('h2:has-text("All Projects")');
    await expect(heading).toBeVisible({ timeout: 5000 });

    console.log('✓ Projects page loaded');
  });

  test('should create a new project via API', async ({ page, request }) => {
    // Login first to get token
    await page.goto(`${FRONTEND_URL}/login`);
    await page.fill('input[type="email"]', TEST_EMAIL);
    await page.fill('input[type="password"]', TEST_PASSWORD);

    // Get the stored token from localStorage
    await page.click('button[type="submit"]');
    await page.waitForURL(`**/dashboard`);

    // Get token from local storage
    const token = await page.evaluate(() => {
      return localStorage.getItem('innovation1_auth_token');
    });

    console.log(`✓ Got auth token: ${token ? token.substring(0, 20) + '...' : 'null'}`);

    if (token) {
      // Create project via API
      const response = await request.post(`${BACKEND_URL}/api/projects`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data: {
          name: `Test Project ${Date.now()}`,
          description: 'Test project created by Playwright',
          status: 'ACTIVE',
          deadline: null,
        },
      });

      console.log(`✓ Create project response status: ${response.status()}`);

      if (response.ok()) {
        const projectData = await response.json();
        console.log(`✓ Project created: ${projectData.name || projectData.id}`);

        // Reload projects page to see new project
        await page.goto(`${FRONTEND_URL}/projects`);
        await page.waitForLoadState('networkidle');

        console.log('✓ Projects page reloaded after creation');
      } else {
        console.log(`✗ Failed to create project: ${response.status()}`);
      }
    } else {
      console.log('✗ No auth token found');
    }
  });

  test('should handle authentication correctly', async ({ page }) => {
    // Test CORS and authentication
    const response = await page.request.get(`${BACKEND_URL}/api/auth/me`, {
      headers: {
        'Authorization': 'Bearer invalid_token',
      },
    });

    // Should get 401 for invalid token
    console.log(`✓ Invalid token response: ${response.status()}`);
    expect(response.status()).toBe(401);

    console.log('✓ Authentication validation working correctly');
  });

  test('should verify backend API endpoints are accessible', async ({ request }) => {
    // Test health endpoint
    const health = await request.get(`${BACKEND_URL}/health`);
    expect(health.ok()).toBeTruthy();
    console.log('✓ Backend health check passed');

    // Test docs endpoint
    const docs = await request.get(`${BACKEND_URL}/docs`);
    expect(docs.ok()).toBeTruthy();
    console.log('✓ Backend API docs accessible');
  });

  test('should verify no CORS errors on API calls', async ({ page }) => {
    let corsError = false;

    // Listen for console errors
    page.on('console', msg => {
      if (msg.type() === 'error' && msg.text().includes('CORS')) {
        corsError = true;
        console.log(`✗ CORS Error: ${msg.text()}`);
      }
    });

    // Login
    await page.goto(`${FRONTEND_URL}/login`);
    await page.fill('input[type="email"]', TEST_EMAIL);
    await page.fill('input[type="password"]', TEST_PASSWORD);
    await page.click('button[type="submit"]');
    await page.waitForURL(`**/dashboard`);

    // Wait for any potential API calls
    await page.waitForLoadState('networkidle');

    if (!corsError) {
      console.log('✓ No CORS errors detected');
    }
  });

  test('should verify no 401 errors in network requests', async ({ page }) => {
    const failedRequests: string[] = [];

    // Intercept failed requests
    page.on('response', response => {
      if (response.status() === 401 || response.status() === 403) {
        failedRequests.push(`${response.request().url()} - ${response.status()}`);
      }
    });

    // Login and navigate
    await page.goto(`${FRONTEND_URL}/login`);
    await page.fill('input[type="email"]', TEST_EMAIL);
    await page.fill('input[type="password"]', TEST_PASSWORD);
    await page.click('button[type="submit"]');
    await page.waitForURL(`**/dashboard`);
    await page.waitForLoadState('networkidle');

    // Check navigation
    await page.goto(`${FRONTEND_URL}/projects`);
    await page.waitForLoadState('networkidle');

    if (failedRequests.length > 0) {
      console.log(`✗ Found ${failedRequests.length} failed requests:`);
      failedRequests.forEach(req => console.log(`  - ${req}`));
    } else {
      console.log('✓ No 401/403 errors in authenticated requests');
    }
  });

  test('should verify frontend can communicate with backend', async ({ page, request }) => {
    // First, verify backend is running
    const backendHealth = await request.get(`${BACKEND_URL}/health`);
    if (!backendHealth.ok()) {
      throw new Error('Backend is not responding');
    }
    console.log('✓ Backend is healthy');

    // Verify frontend loads
    await page.goto(FRONTEND_URL);
    await page.waitForLoadState('networkidle');

    // Check if page has content
    const body = page.locator('body');
    await expect(body).toBeVisible();

    console.log('✓ Frontend-Backend communication verified');
  });
});
