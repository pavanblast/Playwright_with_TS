import { test } from '@playwright/test';
import { LoginSteps } from '../steps/loginsteps';

test.describe('SauceDemo - Login Tests-Positive', () => {
  
  // ==================== POSITIVE TESTS ====================

  test('Positive - Login with valid credentials', async ({ page }) => {

    const loginSteps = new LoginSteps(page);
    await test.step('Login with valid credentials', async () => {
      await loginSteps.login_with_valid_credentials();
    })

  });
})

test.describe('SauceDemo - Login Tests-Negative', () => {

  // ==================== NEGATIVE TESTS ====================

  test('Negative - Login with invalid username and password', async ({ page }) => {
      const loginSteps = new LoginSteps(page);
    
      await test.step('Login with invalid credentials', async () => {
      await loginSteps.login_with_invalid_credentials();
    })

  });

});

  /*test('Negative - Login with locked out user', async ({ page }) => {
    const loginSteps = new SauceDemoLoginSteps(page);

    // Attempt login with locked out user
    await loginSteps.loginWithValidCredentials(
      SauceDemoData.LOCKED_USER,
      SauceDemoData.VALID_PASSWORD
    );

    // Verify locked out error message
    const isErrorDisplayed = await loginSteps.isErrorDisplayed();
    expect(isErrorDisplayed).toBe(true);

    const hasLockedError = await loginSteps.verifyErrorMessage(
      SauceDemoData.ERROR_LOCKED_OUT
    );
    expect(hasLockedError).toBe(true);
  });

  test('Negative - Login with empty username', async ({ page }) => {
    const loginSteps = new SauceDemoLoginSteps(page);

    // Attempt login with only password
    await loginSteps.enterPasswordOnly(SauceDemoData.VALID_PASSWORD);
    await loginSteps.clickLogin();

    // Verify error message
    const isErrorDisplayed = await loginSteps.isErrorDisplayed();
    expect(isErrorDisplayed).toBe(true);

    const hasRequiredUsernameError = await loginSteps.verifyErrorMessage(
      SauceDemoData.ERROR_REQUIRED_USERNAME
    );
    expect(hasRequiredUsernameError).toBe(true);
  });

  test('Negative - Login with empty password', async ({ page }) => {
    const loginSteps = new SauceDemoLoginSteps(page);

    // Attempt login with only username
    await loginSteps.enterUsernameOnly(SauceDemoData.VALID_USERNAME);
    await loginSteps.clickLogin();

    // Verify error message
    const isErrorDisplayed = await loginSteps.isErrorDisplayed();
    expect(isErrorDisplayed).toBe(true);

    const hasRequiredPasswordError = await loginSteps.verifyErrorMessage(
      SauceDemoData.ERROR_REQUIRED_PASSWORD
    );
    expect(hasRequiredPasswordError).toBe(true);
  });

  test('Negative - Login with both fields empty', async ({ page }) => {
    const loginSteps = new SauceDemoLoginSteps(page);

    // Click login without entering any credentials
    await loginSteps.clickLogin();

    // Verify error message for missing username
    const isErrorDisplayed = await loginSteps.isErrorDisplayed();
    expect(isErrorDisplayed).toBe(true);
  });

  test('Negative - Login with valid username but wrong password', async ({ page }) => {
    const loginSteps = new SauceDemoLoginSteps(page);

    // Attempt login with valid username but wrong password
    await loginSteps.loginWithInvalidCredentials(
      SauceDemoData.VALID_USERNAME,
      SauceDemoData.INVALID_PASSWORD
    );

    // Verify error message
    const isErrorDisplayed = await loginSteps.isErrorDisplayed();
    expect(isErrorDisplayed).toBe(true);

    const hasInvalidCredentialsError = await loginSteps.verifyErrorMessage(
      SauceDemoData.ERROR_INVALID_CREDENTIALS
    );
    expect(hasInvalidCredentialsError).toBe(true);
  });

});*/
