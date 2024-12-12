const { Given, When, Then } = require("@cucumber/cucumber");

Given('the user "admin" has navigated to the login page', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("given");
  });

  When('user "admin" logs in with email {string} and password {string}', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    console.log("when");
  });

  When('the user enters email address as {string} and {string}', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    console.log("when");
  });

  When('the user enters following information', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    for(const {email,password} of dataTable.hashes()){
      console.log(email, password);
    }
  });

  Then('user should be navigated to home page', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("then");
  });

  Then('error message {string} should be shown', function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log("then");
  });

  Then('the error {string} should pop', function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log("then");
  });

  Then('error message {string} should pop', function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log("then");
  });

