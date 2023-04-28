import LoginPage from '../../pageobjects/login/login_page.js';
import DateElement from '../../pageobjects/GDLTAQ-11/date_element_page.js';

describe('Validate Date picker from SmartView tab within Zenoss platform', async () => {

    it('should login success page', async () => {
        await LoginPage.open();
        await LoginPage.login('admin@elm1403-test.com', 'D0gP0und!');

    });
    
    it('should handle alert message', async () => {
        await LoginPage.alertMessage();
    });

    it('should go to SmartView tab', async () => {
        await DateElement.selectSmartVTab();
    });

    it('should display date picker options', async () => {
        await DateElement.selectDateDropdown();
        (await DateElement.dateOptionsContainer).waitForDisplayed();
        expect((await DateElement.dateOptionsContainer)).toBeDisplayed();
    });

    it('should select Today option from the quick select list', async () => {
        await DateElement.dateOptionsContainer.scrollIntoView();
        
        await DateElement.selectToday();
        console.log(await DateElement.btnDateDropdown.getText(), '--------->>>>>');
        expect(await DateElement.btnDateDropdown).toHaveTextContaining('Past hours minutes');
        
    });

    it('should select 3 days option from the quick select list', async () => {
        await DateElement.dateOptionsContainer.scrollIntoView();

        for(let i = 0; i < await DateElement.quickSelectList.length; i++){
            console.log( await DateElement.quickSelectList[i].getText(), i, '++++++++');
        }
        await DateElement.select3days();
        expect(await DateElement.btnDateDropdown).toHaveTextContaining('Past 3 days');
        
    });

});