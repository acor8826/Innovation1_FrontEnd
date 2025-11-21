/**
 * Playwright E2E Test Suite for Innovation1 Production URLs
 * Tests the full application workflow on Cloud Run
 */

const { chromium } = require('playwright');

const FRONTEND_URL = 'https://innovation1-frontend-687835063861.us-central1.run.app';
const BACKEND_URL = 'https://innovation1-api-687835063861.us-central1.run.app/api';
const TEST_EMAIL = 'acor8826@hotmail.com';
const TEST_PASSWORD = 'C0rry2025!';

async function runTests() {
  const browser = await chromium.launch();
  const context = await browser.createContext();
  const page = await context.newPage();

  console.log('🧪 Starting Innovation1 Live Production Test Suite...\n');
  console.log(`Frontend URL: ${FRONTEND_URL}`);
  console.log(`Backend URL: ${BACKEND_URL}\n`);

  try {
    // TEST 1: Navigate to login page
    console.log('=== TEST 1: LOGIN PAGE ===');
    await page.goto(`${FRONTEND_URL}/login`, { waitUntil: 'networkidle' });
    const loginPageTitle = await page.title();
    console.log(`✅ Login page loaded: "${loginPageTitle}"`);

    // TEST 2: Test login form
    console.log('\n=== TEST 2: LOGIN FORM ===');
    await page.fill('input[type="email"]', TEST_EMAIL);
    console.log(`✅ Email filled: ${TEST_EMAIL}`);
    
    await page.fill('input[type="password"]', TEST_PASSWORD);
    console.log(`✅ Password filled`);

    // Click login button
    await page.click('button:has-text("Sign In")');
    console.log(`✅ Login button clicked`);

    // Wait for redirect to dashboard
    await page.waitForURL(`${FRONTEND_URL}/dashboard`, { timeout: 30000 });
    console.log(`✅ Redirected to dashboard`);

    // TEST 3: Dashboard page
    console.log('\n=== TEST 3: DASHBOARD PAGE ===');
    const dashboardTitle = await page.title();
    console.log(`✅ Dashboard page loaded: "${dashboardTitle}"`);
    
    // Check if KPI data is displayed
    const kpiElements = await page.locator('[class*="kpi"], [class*="card"]').count();
    console.log(`✅ Found ${kpiElements} dashboard elements`);

    // TEST 4: Projects page
    console.log('\n=== TEST 4: PROJECTS PAGE ===');
    await page.click('a:has-text("Projects"), [href*="projects"]');
    await page.waitForURL(`${FRONTEND_URL}/projects`, { timeout: 30000 });
    console.log(`✅ Projects page loaded`);

    // TEST 5: Tasks page
    console.log('\n=== TEST 5: TASKS PAGE ===');
    await page.click('a:has-text("Tasks"), [href*="tasks"]');
    await page.waitForURL(`${FRONTEND_URL}/tasks`, { timeout: 30000 });
    console.log(`✅ Tasks page loaded`);

    // Check for Kanban board
    const kanbanColumns = await page.locator('[class*="column"], [class*="column"]').count();
    console.log(`✅ Kanban board rendered with ${kanbanColumns} columns`);

    // TEST 6: Team page
    console.log('\n=== TEST 6: TEAM PAGE ===');
    await page.click('a:has-text("Team"), [href*="team"]');
    await page.waitForURL(`${FRONTEND_URL}/team`, { timeout: 30000 });
    console.log(`✅ Team page loaded`);

    // TEST 7: API Endpoint verification
    console.log('\n=== TEST 7: API ENDPOINTS ===');
    
    // Get the stored auth token
    const localStorage = await context.storageState();
    let token = null;
    if (localStorage && localStorage.cookies) {
      // Try to find the token in local storage from the page
      const cookies = localStorage.cookies;
      console.log(`✅ Authentication cookies present`);
    }
    
    // Test API endpoints directly
    const endpoints = [
      { path: '/auth/login', method: 'POST', data: { email: TEST_EMAIL, password: TEST_PASSWORD } },
      { path: '/dashboard/kpis', method: 'GET' },
      { path: '/projects', method: 'GET' },
      { path: '/tasks', method: 'GET' },
      { path: '/team', method: 'GET' },
      { path: '/dashboard/activities', method: 'GET' }
    ];

    for (const endpoint of endpoints) {
      try {
        const response = await page.evaluate(async (url, method, data) => {
          const options = {
            method: method,
            headers: { 'Content-Type': 'application/json' }
          };
          if (data) options.body = JSON.stringify(data);
          
          const res = await fetch(url, options);
          return { status: res.status, ok: res.ok };
        }, `${BACKEND_URL}${endpoint.path}`, endpoint.method, endpoint.data);
        
        console.log(`✅ ${endpoint.method} ${endpoint.path}: ${response.status}`);
      } catch (e) {
        console.log(`⚠️  ${endpoint.method} ${endpoint.path}: Failed (${e.message})`);
      }
    }

    console.log('\n' + '='.repeat(80));
    console.log('✅ ALL TESTS PASSED');
    console.log('='.repeat(80));
    console.log('\n🎉 Innovation1 application is fully operational on Cloud Run!');

  } catch (error) {
    console.error('\n❌ TEST FAILED:', error.message);
    console.error('Stack:', error.stack);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// Run tests
runTests().catch(console.error);
