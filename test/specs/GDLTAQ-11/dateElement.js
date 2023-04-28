import LoginPage from '../../pageobjects/login/login_page.js';

describe('Validate Date picker from SmartView tab within Zenoss platform', async () => {

    it('should login success page', async () => {
        await LoginPage.open();
        await LoginPage.login('admin@elm1403-test.com', 'D0gP0und!');

    }) 

    it('should go to SmartView tab', async () => {
        (await $('a[id="SmartView-nav"]')).click();
    });

    it('should display date picker options', async () => {
        await $('button[data-aut="scrubber-button"][type="button"]').click();
        expect(await $('div[class="scroll-container"]')).toBeDisplayed();
    });

    it('should select 3 days option from the quick select list', async () => {
        const containerOptions = await $('div[class="scroll-container"]');
        await containerOptions.scrollIntoView();

        const quickListOptions = await $$('//div[@class="z-overflow-ellipsis v-list-item v-list-item--link theme--dark"]');
        for(let i = 0; i < await quickListOptions.length; i++){
            console.log(await quickListOptions[i].getText(), i);
        }
    
        quickListOptions[5].doubleClick();
        await browser.pause(3000);
        const btnDatePicker = await $('//button[@class="scrubber-button v-btn v-btn--has-bg theme--dark elevation-0 v-size--default z-btn--action"]/span/div/span');
        await btnDatePicker.getText();
        expect(btnDatePicker).toHaveTextContaining('Past 3 days');
        
    });

});