Feature: User login
  As a user
  I want to put credentials to login page
  So that i can access the home page

  Background:
    Given the user has navigated to the login page

  Scenario: Login with valid credentials
    When user logs in with email "admin@admin.com" and password "admin123456"
    Then user should be navigated to home page

  Scenario: Login with invalid credentials
    When user logs in with email "admin@admin.com" and password "123"
    Then user should get the message "Invalid Credentials"
