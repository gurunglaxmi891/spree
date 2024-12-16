const { Given, When, Then } = require("@cucumber/cucumber");
const {expect} = require("@playwright/test"); 
const loginBtnLocator = ".btn.btn-primary.btn-block";
const emailFieldLocator = "#spree_user_email";
const passwordFieldLocator = "#spree_user_password";
const adminDashboardSelector = "(//figure[contains(@class, 'logo')])[2]";
const errorMessageLocator = "//span[normalize-space()='Invalid email or password.']";

Given('user {string} has navigated to the admin login page',async function (string) {
  // Write code here that turns the phrase above into concrete actions
  await page.goto("http://127.0.0.1:3000/admin/login");
  expect(page.url()).toBe("http://127.0.0.1:3000/admin/login"); 
});

When('user {string} logs in with following credentials',async function (string, dataTable) {
  // Write code here that turns the phrase above into concrete actions
  for (const {email, password} of dataTable.hashes()){
    await page.locator(emailFieldLocator).fill(email);
    await page.locator(passwordFieldLocator).fill(password);
    await page.locator(loginBtnLocator).click();
  };
});

Then('user {string} should be navigated to admin panel dashboard',async function (string) {
  // Write code here that turns the phrase above into concrete actions
  await page.waitForURL("http://127.0.0.1:3000/", { timeout: 5000 });
  expect(page.url()).toBe("http://127.0.0.1:3000/"); 
  await expect(page.locator(adminDashboardSelector)).toBeVisible();
});

When('the user tries to log in with following credentials',async function (dataTable) {
  // Write code here that turns the phrase above into concrete actions
  for (const {email, password, errorMessage} of dataTable.hashes()){
    await page.locator(emailFieldLocator).fill(email);
    await page.locator(passwordFieldLocator).fill(password);
    await page.locator(loginBtnLocator).click();
    await expect(page.locator(errorMessageLocator)).toBeVisible();
  };
});

Then('error message {string} should be shown', function (string) {
  // Write code here that turns the phrase above into concrete actions
  console.log("then");
});


