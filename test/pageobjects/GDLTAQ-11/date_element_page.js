class DateElement {
    get dashboardTab () {
        return $('a[id="Dashboard-nav"]');
    }

    get dashboardHeader() {
        return $('div[class="ctx-labels text-subtitle-2"]');
    }

    get smartViewTab() {
        return $('a[id="SmartView-nav"]');
    }

    get smartViewHeader() {
        return $('div[class="z-smartview-header"]');
    }

    get btnQuickSelect() {
        return $('button[data-aut="scrubber-button"][type="button"]');
    }

    get quickSelectPanel() {
        return $('div[class="scroll-container"]');
    }

    get quickSelectList() {
        return $$('//div[@class="z-overflow-ellipsis v-list-item v-list-item--link theme--dark"]');
    }

    async selectDashboardTab() {
        (await this.dashboardTab).click();
    }

    async selectSmartVTab() {
        await this.smartViewTab.click();
    }

    async selectBtnQuickSelect() {
        await this.btnQuickSelect.click();
    }

    async selectToday() {
        await this.quickSelectList[0].click();
    }
    
    async selectYesterday() {
        await this.quickSelectList[1].click();
    }

    async selectBusinessWeek() {
        await this.quickSelectList[2].click();
    }
    async select30d() {
        await this.quickSelectList[3].click();
    }
    async select1Week() {
        await this.quickSelectList[4].click();
    }
    async select3days() {
        await this.quickSelectList[5].click();
    }
    async select24h() {
        await this.quickSelectList[6].click();
    }
    async select3h() {
        await this.quickSelectList[7].click();
    }
    async select1h() {
        await this.quickSelectList[8].click();
    }

    async textYesterday() {
        const date = new Date();
        const yesterdayFormat = 
            `${date.getMonth() + 1}/${date.getDate() - 1}/${date.getFullYear()}`;
        return yesterdayFormat;
    }
    
}

export default new DateElement();