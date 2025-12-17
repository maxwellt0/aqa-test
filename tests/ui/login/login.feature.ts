import {expect, Page} from "@playwright/test";
import {LoginPage} from "./login.page";
import {configManager} from "@core/config-manager";
import {InventoryPage} from "@ui/inventory/invetory.page";

export class LoginFeature {
    protected loginPage: LoginPage;

    constructor(protected page: Page) {
        this.loginPage = new LoginPage(page);
    }

    async loginWithDefaultUser() {
        await this.loginPage.open();
        const username = configManager.uiUsername;
        const password = configManager.uiPassword;

        await this.loginPage.login(username, password);

        this.verifyRedirectToInventory();
    }

    private verifyRedirectToInventory() {
        const inventoryPage = new InventoryPage(this.page);
        const expectedUrl = `${configManager.uiBaseUrl}${inventoryPage.url}.html`;
        expect(this.page.url()).toBe(expectedUrl);
    }
}