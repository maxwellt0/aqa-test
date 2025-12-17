import {expect, test} from '@playwright/test';
import {LoginFeature} from "@ui/login/login.feature";
import {InventoryPage} from "./invetory.page";

test.describe('SauceDemo UI Tests', () => {

  test.beforeEach(async ({ page }) => {
    await new LoginFeature(page).loginWithDefaultUser();
  });

  test('Scenario 1: Verify Inventory Items', async ({ page }) => {
    const inventoryItems = new InventoryPage(page).items;

    // Verify that exactly 6 items are displayed
    await expect(inventoryItems).toHaveCount(6);
  });

  test('Scenario 2: Add Item to Cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addFirstItemToCart();

    // Verify the cart badge displays 1
    const cartBadge = inventoryPage.cartBadge;
    await expect(cartBadge).toHaveText('1');
  });
});
