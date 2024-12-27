class AddUserPage{
    constructor() {
        this.accountButtonSelector = "//button[@id='account-button']";
        this.dropdownAdminPanelSelector = "//div[contains(@class,'dropdown')]/a[2]";
        this.usersSidebarMenuItemSelector = "//span[text()='Users']";
        this.addUserButtonSelector = "//div[contains(@id,'contentHeaderRow')]//div//a";
        this.emailFieldSelector = "//input[@id='user_email']";
        this.passwordFieldSelector = "//input[@id='user_password']";
        this.passwordConfirmFieldSelector = "//input[@id='user_password_confirmation']";
        this.submitUserBtnSelector = "//form/div[2]/div/button";
        this.checkUserEmailSelector = "//tr[2]/td[1]/a";
    }

    async navigateToUsersPage() {
        await page.locator(this.accountButtonSelector).click();
        await page.locator(this.dropdownAdminPanelSelector).click();
        await page.locator(this.usersSidebarMenuItemSelector).click();
    }

    async addUser(email, password, confirmPassword){
        await page.locator(this.addUserButtonSelector).click();
        await page.locator(this.emailFieldSelector).fill(email);
        await page.locator(this.passwordFieldSelector).fill(password);
        await page.locator(this.passwordConfirmFieldSelector).fill(confirmPassword);
        await page.locator(this.submitUserBtnSelector).click();
    }

    async checkNewUser(){
        await page.locator(this.usersSidebarMenuItemSelector).click();
    }
}

module.exports = { AddUserPage };