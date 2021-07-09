Feature: succesful-login

    Scenario: Use should log in with the proper credentials
        Given correct credentials
        When the user attempts to log in
        Then a success message is displayed