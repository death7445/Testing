import { expect } from "@playwright/test";

import { test, Expect } from '@playwright/test';

test.only('connect to leagueify.org', async ({ page }) => {
  await page.goto('https://leagueify.org/');
  await expect(page).toHaveTitle(/Leagueify/);
});