import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('Login Functionality', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.gotoLoginPage();
    await Login.enterUsername('tomsmith');
    await Login.enterPassword('SuperSecretPassword');
    await Login.clickOnLogin();



});