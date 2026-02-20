const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const loginData = require('../test-data/loginData.json');


test.describe('Login Functionality - ShopHub Pro', () => {

  for (const user of loginData.validUsers) {
    test(`Positive: ${user.role} can sign in`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.navigate();
      await loginPage.login(user.email, user.password);
      await loginPage.verifySuccessfulLogin();
      await loginPage.logout();
    });
  }

  for (const bad of loginData.invalidUsers) {
    test(`Negative: ${bad.description || bad.email}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.navigate();
      await loginPage.login(bad.email, bad.password);

      if (!bad.email && !bad.password) {
        await loginPage.verifyEmptyCredentialsState();
      } else {
        await loginPage.verifyErrorMessageSoft('Invalid email or password');
      }
    });
  }

});
