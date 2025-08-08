import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display homepage correctly', async ({ page }) => {
    await page.goto('/');

    // Check main heading
    await expect(
      page.getByRole('heading', { name: /interview project boilerplate/i })
    ).toBeVisible();

    // Check navigation
    await expect(page.getByRole('link', { name: /home/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /demo/i })).toBeVisible();

    // Check feature cards
    await expect(page.getByText(/typescript ready/i)).toBeVisible();
    await expect(page.getByText(/react query/i)).toBeVisible();
    await expect(page.getByText(/zod validation/i)).toBeVisible();

    // Check demo button works
    await page.getByRole('link', { name: /view demo/i }).click();
    await expect(page).toHaveURL('/demo');
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');

    // Test demo navigation
    await page.getByRole('link', { name: /demo/i }).click();
    await expect(page).toHaveURL('/demo');
    await expect(
      page.getByRole('heading', { name: /component patterns demo/i })
    ).toBeVisible();

    // Test home navigation
    await page.getByRole('link', { name: /home/i }).click();
    await expect(page).toHaveURL('/');
  });
});
