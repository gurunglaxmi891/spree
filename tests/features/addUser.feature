Feature: create user
    As an admin
    I want to add a new user to the website
    So that they can buy products


    Scenario: admin creates a new user
        Given user "admin" has logged in to the admin panel with following credentials:
            | email           | password    |
            | admin@admin.com | admin123456 |
        When user "admin" creates a new user with the following details
            | email         | password | confirmPassword |
            | demo@demo.com | abc123   | abc123          |
        Then user with email "demo@demo.com" should be listed in the users page