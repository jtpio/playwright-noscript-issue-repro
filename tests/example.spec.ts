import { test, expect } from '@playwright/test';

const URL = "http://localhost:8080";

test.use({ javaScriptEnabled: false });

test('see the message when JavaScript is disabled', async ({ page }) => {
  await page.goto(URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Website/);

  await expect(page.getByText('This website requires JavaScript')).toBeVisible();
});
