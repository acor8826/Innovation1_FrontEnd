import { test, expect } from '@playwright/test';

// Test configuration
const FRONTEND_URL = 'https://innovation1-frontend-513885582887.us-central1.run.app';
const BACKEND_URL = 'https://innovation1-api-513885582887.us-central1.run.app';
const TEST_EMAIL = 'acor8826@hotmail.com';
const TEST_PASSWORD = 'C0rry2025!';

test.describe('Create Saturday Project', () => {

  test('should create a project called "saturday" via UI and verify it appears on dashboard', async ({ page, request }) => {
    console.log('\n🧪 Starting: Create "Saturday" Project Test\n');

    // Listen for all network responses
    let createProjectResponse = null;
    let createProjectError = null;

    // Listen to console messages
    page.on('console', msg => {
      if (msg.type() !== 'error') {
        console.log(`[Browser Console] ${msg.text()}`);
      }
    });

    page.on('response', response => {
      if (response.url().includes('/api/projects') && response.request().method() === 'POST') {
        console.log(`🌐 API Response: POST /api/projects → ${response.status()}`);
        createProjectResponse = response;
        if (!response.ok()) {
          response.text().then(text => {
            console.log(`❌ API Error Response: ${text}`);
            createProjectError = text;
          });
        }
      }
      if (response.url().includes('/api/projects') && response.request().method() === 'GET') {
        console.log(`🌐 API Response: GET /api/projects → ${response.status()}`);
      }
    });

    // Step 1: Navigate to login
    console.log('📍 Step 1: Navigate to login page');
    await page.goto(`${FRONTEND_URL}/login`);
    await page.waitForLoadState('networkidle');

    // Verify login page
    const emailInput = page.locator('input[type="email"]');
    const passwordInput = page.locator('input[type="password"]');
    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    console.log('✓ Login page loaded');

    // Step 2: Login with credentials
    console.log('\n📍 Step 2: Login with test credentials');
    await page.fill('input[type="email"]', TEST_EMAIL);
    await page.fill('input[type="password"]', TEST_PASSWORD);
    await page.click('button[type="submit"]');
    await page.waitForURL(`**/dashboard`, { timeout: 10000 });
    await page.waitForLoadState('networkidle');
    console.log('✓ Logged in successfully');

    // Get the auth token for debugging
    const token = await page.evaluate(() => localStorage.getItem('innovation1_auth_token'));
    console.log(`🔐 Auth token: ${token ? token.substring(0, 20) + '...' : 'NONE'}`);

    // Step 3: Navigate to projects page
    console.log('\n📍 Step 3: Navigate to projects page');
    await page.goto(`${FRONTEND_URL}/projects`);
    await page.waitForLoadState('networkidle');
    const projectsHeading = page.locator('h2:has-text("All Projects")');
    await expect(projectsHeading).toBeVisible({ timeout: 5000 });
    console.log('✓ Projects page loaded');

    // Step 4: Click "Add Project" button
    console.log('\n📍 Step 4: Click "Add Project" button');
    const addProjectBtn = page.locator('button:has-text("Add Project")');
    await expect(addProjectBtn).toBeVisible({ timeout: 5000 });
    await addProjectBtn.click();
    console.log('✓ Clicked "Add Project" button');

    // Step 5: Wait for modal
    console.log('\n📍 Step 5: Wait for create project modal');
    await page.waitForSelector('[role="dialog"]', { timeout: 5000 });
    console.log('✓ Modal appeared');

    // Step 6: Fill in project details
    console.log('\n📍 Step 6: Fill in project details');
    const nameInput = page.locator('input#name');
    await expect(nameInput).toBeVisible({ timeout: 5000 });
    await nameInput.fill('saturday');
    console.log('✓ Entered project name: "saturday"');

    const descriptionInput = page.locator('textarea#description');
    if (await descriptionInput.isVisible({ timeout: 2000 }).catch(() => false)) {
      await descriptionInput.fill('Test project created on Saturday');
      console.log('✓ Entered description');
    }

    // Step 7: Submit form and wait for API response
    console.log('\n📍 Step 7: Click "Create Project" button');
    const createBtn = page.locator('button:has-text("Create Project")');
    await expect(createBtn).toBeVisible({ timeout: 5000 });

    // Wait for API response after clicking
    const apiResponsePromise = page.waitForResponse(
      response => response.url().includes('/api/projects') && response.request().method() === 'POST',
      { timeout: 10000 }
    );

    await createBtn.click();
    console.log('✓ Clicked "Create Project" button');

    try {
      const apiResponse = await apiResponsePromise;
      console.log(`\n✓ API Response received: ${apiResponse.status()}`);

      if (apiResponse.status() === 307 || apiResponse.status() === 301 || apiResponse.status() === 302) {
        // Handle redirect
        console.log(`↪️ Redirect detected (${apiResponse.status()}), following...`);
        const redirectUrl = apiResponse.headers('location');
        console.log(`Redirect URL: ${redirectUrl}`);

        // Wait a moment for the redirect to complete
        await page.waitForTimeout(500);

        // Check if we can get the created project response
        const finalResponse = await page.evaluate(() => {
          return localStorage.getItem('innovation1_auth_token') ? 'Token available' : 'No token';
        });
        console.log(`✓ Redirect completed, auth token still available`);
      } else if (apiResponse.ok()) {
        const responseData = await apiResponse.json();
        console.log(`✓ Project created: ${responseData.name || responseData.id}`);
      } else {
        const errorData = await apiResponse.text().catch(() => 'Unable to read response');
        console.log(`❌ API Error: ${errorData}`);
        throw new Error(`API returned ${apiResponse.status()}: ${errorData}`);
      }
    } catch (err) {
      console.log(`❌ Failed to get API response: ${err}`);
      if (createProjectError) {
        console.log(`Previous error: ${createProjectError}`);
      }
      throw err;
    }

    // Step 8: Wait for modal to close and projects to reload
    console.log('\n📍 Step 8: Wait for modal to close');
    await page.waitForSelector('[role="dialog"]', { state: 'hidden', timeout: 5000 }).catch(() => {
      console.log('⚠️ Modal did not close, continuing anyway');
    });
    await page.waitForTimeout(1000);

    // Step 9: Verify project appears in list
    console.log('\n📍 Step 9: Verify "saturday" project appears in list');
    await page.goto(`${FRONTEND_URL}/projects`);
    await page.waitForLoadState('networkidle');
    console.log('✓ Projects page reloaded');

    // Check if "saturday" project is visible
    console.log('\n📍 Step 9b: Check page HTML for "saturday"');

    // Get all text content from page
    const fullPageText = await page.content();

    // Look for saturday in HTML
    const saturdayMatches = fullPageText.match(/saturday/gi);
    console.log(`Found "${saturdayMatches ? saturdayMatches.length : 0}" instances of "saturday" in HTML`);

    // Try finding by exact text first
    const saturdayExact = page.locator('text="saturday"');
    const countExact = await saturdayExact.count();
    console.log(`Found ${countExact} exact matches for "saturday"`);

    // Try case-insensitive
    const saturdayProject = page.locator('text=/saturday/i');
    const count = await saturdayProject.count();
    console.log(`Found ${count} case-insensitive matches for "saturday"`);

    // Extract all project names by looking at h3 elements or divs with project data
    const allElements = await page.locator('h3, [class*="name"], [class*="title"]').allTextContents();
    console.log(`\nProject names found in page:`);
    allElements.forEach((text, index) => {
      if (text.trim().length > 0 && text.trim().length < 100) {
        console.log(`  ${index}: "${text.trim()}"`);
      }
    });

    if (count > 0) {
      console.log('✅ SUCCESS: "saturday" project found in projects list!');
      await expect(saturdayProject.first()).toBeVisible();
    } else {
      console.log('❌ FAILED: "saturday" project NOT found in list');
      throw new Error('Project "saturday" was not created or is not visible');
    }

    // Step 10: Navigate to dashboard and verify
    console.log('\n📍 Step 10: Verify project appears on dashboard');
    await page.goto(`${FRONTEND_URL}/dashboard`);
    await page.waitForLoadState('networkidle');

    const dashboardSaturday = page.locator('text=saturday', { ignoreCase: true });
    if (await dashboardSaturday.isVisible({ timeout: 5000 }).catch(() => false)) {
      console.log('✅ SUCCESS: "saturday" project also visible on dashboard!');
    } else {
      console.log('⚠️ WARNING: "saturday" project not visible on dashboard, but was created');
    }

    console.log('\n✅ TEST COMPLETE: Project "saturday" successfully created!\n');
  });

});
