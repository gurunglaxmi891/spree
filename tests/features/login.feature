Feature: login
  As an admin
  I want to login to the admin panel
  So that I can manage my products

  Background:
    Given the user "admin" has navigated to the login page

  Scenario: login with valid credentials
    When user "admin" logs in with email "admin@admin.com" and password "admin123456"
    Then user should be navigated to home page

  Scenario: login with invalid credentials
    When user "admin" logs in with email "admin@admin.com" and password "123"
    Then error message "Invalid Credentials" should be shown
