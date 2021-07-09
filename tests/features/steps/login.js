// LOGIN STEPS
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const loginPage = require('../../page_objects/login.js');

Given('incorrect credentials', async function () {
    await loginPage.typeUsername("test@example.com");
    await loginPage.typePassword("wrongPassword");
});

Given('correct credentials', async function () {
  await loginPage.typeUsername("asd");
  await loginPage.typePassword("asd");
});

When('the user attempts to log in', async function () {
    await loginPage.submitButton().click()
});

Then('an error will display', async function () {
    await driver.wait(() => {
      return loginPage.loginMessage().isDisplayed();
    }, 15000);

    const actualMessage = await loginPage.loginMessage().getText();
    const expectedMessage = 'Enter your userName and password correct';

    assert.equal(actualMessage, expectedMessage, 'an unexpected message was displayed');
});

Then('a success message is displayed', async function () {
    await driver.wait(() => {
      return loginPage.loginTitle().isDisplayed();
    }, 15000);

    const actualMessage = await loginPage.loginTitle().getText();
    const expectedMessage = 'Login Successfully';

    assert.equal(actualMessage, expectedMessage, 'an unexpected message was displayed');
});
