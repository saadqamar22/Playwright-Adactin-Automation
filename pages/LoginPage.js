class LoginPage {
    constructor(page){
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginbutton = page.locator('#login');
        this.message = page.locator('.welcome_menu');
    }

    async goto() {
        await this.page.goto('/index.php');
    }

    async login(user,pass){
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginbutton.click();
    }

}

export default LoginPage;