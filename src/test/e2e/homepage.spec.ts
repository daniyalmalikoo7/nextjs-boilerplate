import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display homepage correctly', async ({ page }) => {
    await page.goto('/');

    // Check main heading
    await expect(
      page.getByRole('heading', { name: /hello world/i })
    ).toBeVisible();

    // Check tech stack badges
    await expect(page.getByText(/next\.js 15/i)).toBeVisible();
    await expect(page.getByText(/shadcn\/ui/i)).toBeVisible();
    await expect(page.getByText(/magic ui mcp/i)).toBeVisible();
    await expect(page.getByText(/lucide react/i)).toBeVisible();

    // Check get started button
    await expect(
      page.getByRole('button', { name: /get started building/i })
    ).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');

    // Check header navigation
    await expect(
      page.getByRole('link', { name: /next\.js boilerplate/i })
    ).toBeVisible();
    await expect(page.getByRole('link', { name: /github/i })).toBeVisible();

    // Test home navigation by clicking header link
    await page.getByRole('link', { name: /next\.js boilerplate/i }).click();
    await expect(page).toHaveURL('/');
  });
});
