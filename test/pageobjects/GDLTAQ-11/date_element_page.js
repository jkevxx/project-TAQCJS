class DateElement {
    get smartViewTab() {
        return $('a[id="SmartView-nav"]');
    }

    get btnDateDropdown() {
        return $('button[data-aut="scrubber-button"][type="button"]');
    }

    get dateOptionsContainer() {
        return $('div[class="scroll-container"]');
    }

    get quickSelectList() {
        return $$('//div[@class="z-overflow-ellipsis v-list-item v-list-item--link theme--dark"]');
    }

    async selectSmartVTab() {
        (await this.smartViewTab).click();
    }

    async selectDateDropdown() {
        (await this.btnDateDropdown).click();
    }

    async select3days() {
        (await this.quickSelectList[5]).click();
    }

    async selectToday() {
        (await this.quickSelectList[0]).click();
    }

}

export default new DateElement();