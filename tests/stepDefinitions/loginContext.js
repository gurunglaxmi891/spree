const { Given, When, Then } = require("@cucumber/cucumber");

Given('the user "admin" has navigated to the login page', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("given");
  });

  When('user "admin" logs in with email {string} and password {string}', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    console.log("when");
  });

  Then('user should be navigated to home page', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("then");
  });

  Then('error message {string} should be shown', function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log("then");
  });
