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

  Scenario Outline: login with invalid email format
    When the user enters email address as "<invalidemail>" and "<password>"
    Then the error "<message>" should pop
    Examples:
        | invalidemail | password | message         |
        | ab.com       | hello    | @ is missing    |
        | abc@gmail    | hiii     | .com is missing |

  Scenario: credentials are missing
    When the user enters following information
        | email      | password |
        |            | hello    |
        |a@admin.com |          |
    Then error message "Fill all details" should pop
    