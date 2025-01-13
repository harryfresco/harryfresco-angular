import { test, expect } from '@playwright/test';

// await page.goto('https://harryfresco.co.uk/');
// await page.getByRole('button', { name: 'Entry, please' }).click();
// await page.getByRole('button', { name: 'digital' }).click();
// await expect(page.locator('div').filter({ hasText: 'miyajima island' }).nth(3)).toBeVisible();
// await page.locator('div').filter({ hasText: /^digitalanalogue$/ }).locator('#analogue').click();
// await expect(page.getByText('wizardjapanskynov \'24black &')).toBeVisible();
// await page.getByRole('link', { name: 'bristol' }).click();
// await expect(page.locator('div').filter({ hasText: 'clifton suspension bridgei' }).nth(3)).toBeVisible();

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Entry, please' }).click();
  await page.getByRole('button', { name: 'digital' }).click();
});
test('photos load', async ({ page }) => {
  

  await expect(page.getByAltText('miyajima island')).toBeVisible({ timeout: 15000 });
});

test('navbar works', async ({ page }) => {
  await page.locator('div').filter({ hasText: /^digitalanalogue$/ }).locator('#analogue').click();
  await expect(page.getByText('wizardjapanskynov \'24black &')).toBeVisible();
  await page.getByRole('link', { name: 'bristol' }).click();
  await expect(page.getByRole('heading', { name: 'bristol.' })).toBeVisible({ timeout: 15000 });
});
test('gallery load', async ({ page }) => {
  await page.getByRole('link', { name: 'view all' }).click();

  await expect(page.getByAltText('greenwich')).toBeVisible({ timeout: 15000 });
  
});

test('resposiveness works', async ({ page }) => {

  await page.setViewportSize({ width: 375, height: 667 }); // iPhone 6/7/8 dimensions
  await expect(page.locator('.icon')).toBeVisible();
  await page.locator('.icon').click();
  await page.locator('#myLinks').getByText('analogue').click();
  await expect(page.getByRole('link', { name: '-- bristol' })).toBeVisible();
});
test('about page', async ({ page }) => {
  await page.getByRole('link', { name: 'about.' }).click();
  await expect(page.getByText('These are all of my pictures')).toBeVisible();
  
});