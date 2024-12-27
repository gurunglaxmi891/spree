const { Given, When, Then } = require("@cucumber/cucumber");
const {expect} = require("@playwright/test"); 
const { LoginPage } = require("../pageObjects/LoginPage");
const { AddUserPage } = require("../pageObjects/AddUserPage");

const loginPage = new LoginPage();
const addUserPage = new AddUserPage();

Given('user {string} has logged in to the admin panel with following credentials:',async function (user,credentials) {
    await loginPage.navigateToAdminLoginPage();
    await expect(page).toHaveURL('http://127.0.0.1:3000/admin/login');
    await loginPage.login(' ', credentials);
    await page.waitForURL("http://127.0.0.1:3000/", { timeout: 5000 });
  });

When('user {string} creates a new user with the following details:', async function (user, credentials) {
  await addUserPage.navigateToUsersPage();
  for (const {email, password, confirmPassword} of credentials.hashes()){
    await addUserPage.addUser(email, password, confirmPassword);
  };
});

Then('user with email {string} should be listed in the users page',async function (userEmail) {
  await page.locator(addUserPage.usersSidebarMenuItemSelector).click();
  await addUserPage.checkNewUser();
  await expect(page.locator(addUserPage.checkUserEmailSelector)).toHaveText(userEmail);
  });
