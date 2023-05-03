export class InventoryPage {
    get advancedSearchBtn() {
        return browser.$('/html/body/div/div[1]/main/div/div/div/div[2]/div[3]/button');
    }

    get AdvancedSearchInput() {
        return browser.$('/html/body/div/div[1]/main/div/div/div/div[2]/div[3]/div/div/div[1]/div/div/div/div/div[1]/div[1]/div[1]/input');
    }

    get searchBtn() {
        return browser.$('/html/body/div/div[1]/main/div/div/div/div[2]/div[3]/div/button')
    }

    get searchErrorMessage() {
        return browser.$('/html/body/div/div[1]/div[2]');
    }

    async advancedSearchMode() {
        await this.advancedSearchBtn.click();
    }

    async insertValues(values) {
        await this.AdvancedSearchInput.waitForClickable({
            timeout: 5000
        });
        if (!await this.AdvancedSearchInput.isClickable) {
            return;
        }

        for (const value of values) {
            await this.AdvancedSearchInput.setValue(value);
            await browser.keys('\uE007');
        }
    }

    async startSearch() {
        await this.searchBtn.click();
    }
}