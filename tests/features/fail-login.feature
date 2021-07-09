Feature: fail-login

    Scenario: User can't access with invalid credentials
        Given incorrect credentials
        When the user attempts to log in
        Then an error will display