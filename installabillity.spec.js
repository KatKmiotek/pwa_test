const { test, expect } = require('@playwright/test');


test.describe('testing intallability of Twitter PWA', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'load' });
    })

    test('something', async ({ page }) => {
        
    })
})