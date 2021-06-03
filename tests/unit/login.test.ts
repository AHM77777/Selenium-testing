const loginPage = require('../page_objects/login.js')

test('everything is a function', () => {
  for (let item in loginPage) {
    expect(typeof(loginPage[item])).toEqual(typeof(() => {}));
  }
});

test('no empty page object', () => {
  expect(Object.keys(loginPage).length).toBeGreaterThan(0);
});