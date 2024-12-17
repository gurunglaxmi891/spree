class LoginPage {
    constructor() {
        this.loginBtnSelector = ".btn.btn-primary.btn-block"; 
        this.emailFieldSelector = "#spree_user_email";
        this.passwordFieldSelector = "#spree_user_password";
        this.adminDashboardSelector = "div.alert-success";
        this.errorMessageSelector = "div.alert-danger";
    }

    async navigateToAdminLoginPage() {
        await page.goto("http://127.0.0.1:3000/admin/login");
    }

    async login(user, credentials) {
        for (const {email, password} of credentials.hashes()){
            await page.locator(this.emailFieldSelector).fill(email);
            await page.locator(this.passwordFieldSelector).fill(password);
            await page.locator(this.loginBtnSelector).click();
          };
    };
}
module.exports = { LoginPage };