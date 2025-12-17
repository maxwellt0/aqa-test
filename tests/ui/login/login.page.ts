import {BasePage} from "@ui/core/base.page";

export class LoginPage extends BasePage {

    get usernameInput() {
        return this.page.locator('input[data-test="username"]')
    };

    get passwordInput() {
        return this.page.locator('input[data-test="password"]')
    };

    get submitButton() {
        return this.page.locator('input[data-test="login-button"]')
    };

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}