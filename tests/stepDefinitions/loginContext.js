const { Given, When, Then } = require("@cucumber/cucumber");
const {expect} = require("@playwright/test"); 
const loginBtnLocator = ".btn.btn-primary.btn-block";
const emailFieldLocator = "#spree_user_email";
const passwordFieldLocator = "#spree_user_password";
const adminDashboardSelector = "(//figure[contains(@class, 'logo')])[2]";
const errorMessageLocator = "//span[normalize-space()='Invalid email or password.']";

Given('user {string} has navigated to the admin login page',async function (user) {
  await page.goto("http://127.0.0.1:3000/admin/login");
  await expect(page).toHaveURL('http://127.0.0.1:3000/admin/login');
});

When('user {string} logs in with following credentials',async function (user, credentials) {
  for (const {email, password} of credentials.hashes()){
    await page.locator(emailFieldLocator).fill(email);
    await page.locator(passwordFieldLocator).fill(password);
    await page.locator(loginBtnLocator).click();
  };
});

Then('user {string} should be navigated to admin panel dashboard',async function (user) {
  await page.waitForURL("http://127.0.0.1:3000/", { timeout: 5000 });
  expect(page.url()).toBe("http://127.0.0.1:3000/"); 
  await expect(page.locator(adminDashboardSelector)).toBeVisible();
});

When('the user tries to log in with following credentials',async function (credentials) {
  for (const {email, password} of credentials.hashes()){
    await page.locator(emailFieldLocator).fill(email);
    await page.locator(passwordFieldLocator).fill(password);
    await page.click(loginBtnLocator);
  };
});

Then('error message {string} should be shown',async function (expectedErrorrrorMessage) {
  await expect(page.locator(errorMessageLocator)).toHaveText(expectedErrorrrorMessage);
});


