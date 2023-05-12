import LoginPage from '../../pageobjects/login/login_page.js';
import {
    HomePage
} from '../../pageobjects/GDLTAQ-16/homePage.js';
import {
    InventoryPage
} from '../../pageobjects/GDLTAQ-16/inventoryPage.js';

describe('Login test suit', () => {
    it('Login - valid values', async () => {
        await LoginPage.open();
        await LoginPage.login('admin@elm1403-test.com', 'D0gP0und!');
    });

    it('Skip alert message', async () => {
        await browser.pause(1000 * 2);
        await LoginPage.alertMessage();
    });
})

describe('Advanced search test suit', () => {
    const homePage = new HomePage();
    const inventoryPage = new InventoryPage();

    it('Go to inventory page', async () => {
        homePage.goToInventory();
    });

    it('Change to advanced search mode', async () => {
        await inventoryPage.advancedSearchMode();
    });

    it('Insert values to search', async () => {
        await inventoryPage.insertValues(['source', 'equal to', 'cz0']);
    });

    it('Search values', async () => {
        await inventoryPage.startSearch();
        await expect(inventoryPage.searchErrorMessage).not.toBeExisting();
    });
});