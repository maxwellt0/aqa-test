import {BasePage} from "@ui/core/base.page";
import {Locator} from "@playwright/test";

export class InventoryPage extends BasePage {
    get url() { return "/inventory"};

    get items() {
        return this.page.locator('.inventory_item')
    }

    get cartBadge() {
        return this.page.locator('.shopping_cart_link span')
    }

    getItemCartButton(item: Locator) {
        return item.locator('[data-test^="add-to-cart"]')
    }

    async addFirstItemToCart() {
        const item = this.items.first();
        const cartButton = this.getItemCartButton(item);
        await cartButton.click();
    }
}