class AddUserPage{
    constructor() {
        this.accountButtonSelector = "//button[@id='account-button']//*[name()='svg']";
        this.dropdownAdminPanelSelector = "//a[normalize-space()='Admin Panel']";
        this.usersSidebarMenuItemSelector = "//span[normalize-space()='Users']";
        this.addUserButtonSelector = "//div[@class='page-actions pl-0 pr-0 d-none d-lg-flex']//a[@id='admin_new_user_link']";
        this.emailFieldSelector = "//input[@id='user_email']";
        this.passwordFieldSelector = "//input[@id='user_password']";
        this.passwordConfirmFieldSelector = "//input[@id='user_password_confirmation']";
        this.createUserBtnSelector = "//button[normalize-space()='Create']";
        this.checkUserEmailSelector = "//a[normalize-space()='demo@demo.com']";
    }

    async navigateToAddUsersPage() {
        await page.locator(this.accountButtonSelector).click();
        await page.locator(this.dropdownAdminPanelSelector).click();
        await page.locator(this.usersSidebarMenuItemSelector).click();
    }

    async addUser(user, email, password, confirmPassword){
        await page.locator(this.addUserButtonSelector).click();
        await page.locator(this.emailFieldSelector).fill(email);
        await page.locator(this.passwordFieldSelector).fill(password);
        await page.locator(this.passwordConfirmFieldSelector).fill(confirmPassword);
        await page.locator(this.createUserBtnSelector).click();
    }

    async checkNewUser(){
        await page.locator(this.usersSidebarMenuItemSelector).click();
    }
}
module.exports = { AddUserPage };