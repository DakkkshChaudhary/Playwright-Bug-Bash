const { expect } = require('@playwright/test');

class LoginPage {

  constructor(page) {
    this.page = page;

    this.loginForm = page.locator('#loginForm');

    this.emailInput = page.getByRole('textbox', { name: 'Email Address' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });

    this.signInButton = page.getByRole('button', { name: 'Sign In' });

    this.errorMessage = page.locator('text=/Invalid email or password/i');

    // After successful login
    this.allProductsText = page.locator('text=All Products');
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
  }

  async navigate() {
    
    await this.page.goto('/');
    await expect(this.loginForm).toBeVisible();
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  async clearFields() {
    await this.emailInput.fill('');
    await this.passwordInput.fill('');
  }

  async verifyErrorMessage(expectedText) {
    await expect(this.errorMessage).toBeVisible({ timeout: 10000 });
    if (expectedText) {
      await expect(this.errorMessage).toContainText(expectedText);
    }
  }

  
  async verifyErrorMessageSoft(expectedText) {
    await expect.soft(this.errorMessage).toBeVisible({ timeout: 10000 });
    if (expectedText) {
      await expect.soft(this.errorMessage).toContainText(expectedText);
    }
  }

  async verifyEmptyCredentialsState() {
    await expect.soft(this.loginForm).toBeVisible();
    await expect.soft(this.errorMessage).not.toBeVisible();
  }

  async verifySuccessfulLogin() {
    await expect(this.allProductsText).toBeVisible();
  }

  async logout() {
    await this.logoutButton.click();
    await expect(this.loginForm).toBeVisible();
  }
}

module.exports = { LoginPage };
