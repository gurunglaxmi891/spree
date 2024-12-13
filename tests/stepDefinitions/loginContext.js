const { Given, When, Then } = require("@cucumber/cucumber");

Given('user {string} has navigated to the admin login page', function (string) {
  // Write code here that turns the phrase above into concrete actions
  console.log("given");
});

When('user {string} logs in with following credentials', function (string, dataTable) {
  // Write code here that turns the phrase above into concrete actions
  console.log("when");
});

Then('user {string} should be navigated to admin panel dashboard', function (string) {
  // Write code here that turns the phrase above into concrete actions
  console.log("then");
});

When('the user tries to log in with following credentials', function (dataTable) {
  // Write code here that turns the phrase above into concrete actions
  console.log("when");
});

Then('error message {string} should be shown', function (string) {
  // Write code here that turns the phrase above into concrete actions
  console.log("then");
});


