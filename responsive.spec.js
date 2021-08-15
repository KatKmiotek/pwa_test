const { test, expect } = require('@playwright/test');


test.describe('responsive design tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('header is visible', async ({ page }) => {

    const header = page.locator('text=Happening now');
    await expect(header).toBeVisible;

  });
  test('banner is visible', async ({ page }) => {

    const banner = page.locator('text=Join Twitter today.');
    await expect(banner).toBeVisible;

  })
  test('small logo is visible', async ({ page }) => {
    const smallLogo = page.locator('path');
    await expect(smallLogo).toBeVisible;
  })

  test('big logo to be visible', async ({ page }) => {
    const bigLogo = page.locator('.r-jwli3a g path');
    await expect(bigLogo).toBeVisible;
  })
});
