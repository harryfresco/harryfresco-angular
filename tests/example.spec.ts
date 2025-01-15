import { test, expect } from '@playwright/test';
import * as data from '../src/assets/data.json';

test.beforeEach(async ({ page }) => {
  await page.goto('./', {'timeout': 120000});
  await expect(page.getByRole('button', { name: 'Entry, please' })).toBeVisible();
  // Click landing cta
  await page.getByRole('button', { name: 'Entry, please' }).click();
  // Click button to go to /digital
  await page.getByRole('button', { name: 'digital' }).click();
});
test('photos load', async ({ page }) => {
  //let testAlt = testDataDigital.images[0].imgTitle
    // Extract the route by removing the base URL
    const baseUrl = 'http://localhost:4200';
    const route = page.url().replace(baseUrl, '');
    //console.log(route)
    let testAlt = data[route].images[0].imgTitle
    // console.log(testAlt)
  // The picture with alt text 'miyajima island' should be visible 
  // (Added a long timeout as I haven't made it wait for loader to be finished)
  await expect(page.getByAltText(testAlt)).toBeVisible({ timeout: 15000 });
});

test('navbar works', async ({ page, isMobile }) => {
  if(isMobile==false){
    // Click 'analogue' in navbar
    await page.locator('div').filter({ hasText: /^digitalanalogue$/ }).locator('#analogue').click();
    // The analogue navbar should be visible
    // await expect(page.getByText('wizardjapanskynov \'24black &')).toBeVisible();
    // Click 'bristol'
    await page.getByRole('link', { name: 'bristol' }).click();
  }
  else{
    // The hamburger icon should be visible
    // await expect(page.locator('.icon')).toBeVisible();
    // Click hamburger
    await page.locator('.icon').click();
    // Click 'analogue'
    await page.locator('#myLinks').getByText('analogue').click();
    // '--bristol' should now show
    // await expect(page.getByRole('link', { name: '-- bristol' })).toBeVisible();
    await page.getByRole('link', { name: '-- bristol' }).click();
  }
  // The title of the new 'bristol' page should be visible 
  // (Didn't want to test for an image as that could be uneccessary duplication?)
  await expect(page.getByRole('heading', { name: 'bristol.' })).toBeVisible({ timeout: 15000 });
});
test('gallery load', async ({ page, isMobile }) => {
  // Click 'View All'
  if(isMobile==false){
    // .last() because it brings up both the navbar and footer buttons, even though only one is visible
    await page.getByRole('link', { name: 'view all' }).last().click();
  }
  else{
    // Click hamburger
    await page.locator('.icon').click();
    // .first() because it brings up both the navbar and footer buttons, even though only one is visible
    await page.getByRole('link', { name: 'view all' }).first().click();
  }
  let testAlt = data['/analogue/may23'].images[1].imgTitle
  // The picture with alt text 'greenwich' should be visible
  await expect(page.getByAltText(testAlt)).toBeVisible({ timeout: 15000 });
  
});


test('about page', async ({ page, isMobile }) => {
  // Click About
  if(isMobile==false){
     // .last() because it brings up both the navbar and footer buttons, even though only one is visible
     await page.getByRole('link', { name: 'about.' }).last().click();
  }
  else{
      // Click hamburger
      await page.locator('.icon').click();
       // .first() because it brings up both the navbar and footer buttons, even though only one is visible
      await page.getByRole('link', { name: 'about' }).first().click();
  }
  // The text should be visible
  await expect(page.getByText('These are all of my pictures')).toBeVisible();
  
});