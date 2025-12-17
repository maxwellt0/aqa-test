import {Page} from "@playwright/test";
import {configManager} from "@core/config-manager";

export abstract class BasePage {
    abstract get url(): string

    constructor(protected page: Page) {
    }

    open() {
        return this.page.goto(
            configManager.uiBaseUrl + this.url
        );
    }
}