import { test } from '@playwright/test';

class LoginPage {
    constructor(page){
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginbutton = page.locator('#login');
        this.message = page.locator('.welcome_menu');
    }

    async attachScreenshot(name) {
        await test.info().attach(name, {
            body : await this.page.screenshot(),
            contentType: 'image/png',
        });
    }

    async goto() {
        await this.page.goto('/index.php');
        await this.attachScreenshot('01-Login page opened');
    }

    async login(user,pass){
        await this.username.fill(user);
        await this.attachScreenshot('02-after entering username');
        await this.password.fill(pass);
        await this.attachScreenshot('03-after entering password');
        await this.loginbutton.click();
        await this.attachScreenshot('04-after clicking login button');
    }

}

export default LoginPage;
