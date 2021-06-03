const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const loginPage = require('../../page_objects/login.js');

Given('the credentials are incorrect', async function () {
    await loginPage.typeUsername("test@example.com");
    await loginPage.typePassword("wrongPassword");
});

When('the user attempts to log in', async function () {
    await loginPage.submitButton().click()
});

Then('an error message is displayed', async function () {
    await driver.wait(() => {
      return loginPage.loginMessage().isDisplayed();
    }, 15000);

    const actualMessage = await loginPage.loginMessage().getText();
    const expectedMessage = 'Enter your userName and password correct';

    assert.equal(actualMessage, expectedMessage, 'an unexpected message was displayed');
});

