import { test, expect } from '@playwright/test';

test.describe('Demo Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/demo');
  });

  test('should display demo page correctly', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: /component patterns demo/i })
    ).toBeVisible();

    // Check tabs are present
    await expect(
      page.getByRole('button', { name: /forms & input/i })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: /data display/i })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: /interactions/i })
    ).toBeVisible();
  });

  test('should handle tab navigation', async ({ page }) => {
    // Default tab should be Forms
    await expect(page.getByText(/form handling/i)).toBeVisible();

    // Click Data Display tab
    await page.getByRole('button', { name: /data display/i }).click();
    await expect(page.getByText(/data display/i)).toBeVisible();
    await expect(page.getByRole('table')).toBeVisible();

    // Click Interactions tab
    await page.getByRole('button', { name: /interactions/i }).click();
    await expect(page.getByText(/interactive elements/i)).toBeVisible();
    await expect(page.getByText(/drag & drop area/i)).toBeVisible();
  });

  test('should handle form interactions', async ({ page }) => {
    // Fill out form
    await page.getByPlaceholder(/enter title/i).fill('Test Title');
    await page.getByPlaceholder(/enter content/i).fill('Test Content');

    // Click save button
    await page.getByRole('button', { name: /save/i }).click();

    // Should show loading state briefly
    await expect(page.getByText(/loading/i)).toBeVisible();

    // Wait for loading to complete
    await expect(page.getByText(/loading/i)).not.toBeVisible({ timeout: 2000 });
  });

  test('should be responsive', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    await expect(
      page.getByRole('heading', { name: /component patterns demo/i })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: /forms & input/i })
    ).toBeVisible();

    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });

    await expect(
      page.getByRole('heading', { name: /component patterns demo/i })
    ).toBeVisible();
  });
});
