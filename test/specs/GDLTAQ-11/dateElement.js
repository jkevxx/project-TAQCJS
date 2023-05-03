import LoginPage from '../../pageobjects/login/login_page.js';
import DateElement from '../../pageobjects/GDLTAQ-11/date_element_page.js';
 
describe('Validate Time Range Controls from SmartView tab within Zenoss platform', async () => {

    it('should login success page', async () => {
        await LoginPage.open();
        await LoginPage.login('admin@elm1403-test.com', 'D0gP0und!');
    });
    
    it('should handle alert message', async () => {
        await LoginPage.alertMessage();
    });

    it('should go to SmartView tab', async () => {
        await DateElement.selectSmartVTab();
        expect(await DateElement.smartViewHeader).toHaveText('Smart view');
    });

    it('should display the quick select panel', async () => {
        await DateElement.selectBtnQuickSelect();
        await DateElement.quickSelectPanel.waitForDisplayed();
        expect(await DateElement.quickSelectPanel).toBeDisplayed();
    });

    it('should select Today option from the quick select list', async () => {
        await DateElement.quickSelectPanel.scrollIntoView();
        await DateElement.selectToday();
        const today = new Date();
        console.log('---->>>>> today in dropdown: ', await DateElement.btnQuickSelect.getText());
        console.log('*** today in method textToday****: ', DateElement.textToday());
        expect(await DateElement.btnQuickSelect).toHaveTextContaining(await DateElement.textToday());    
    });

    it('should select Yesterday option', async () => {
        await DateElement.selectBtnQuickSelect();
        await DateElement.quickSelectPanel.scrollIntoView();
        await DateElement.selectYesterday();
        console.log('---->>>>> yesterday in dropdown: ', await DateElement.btnQuickSelect.getText());
        console.log('****yesterday in method textYesterday****: ', await DateElement.textYesterday());
        expect(await DateElement.btnQuickSelect).toHaveTextContaining(await DateElement.textYesterday()); 
    });

    it('should select Business Week option', async () => {
        await DateElement.selectBtnQuickSelect();
        await DateElement.quickSelectPanel.scrollIntoView();
        await DateElement.selectBusinessWeek();
        console.log('---->>>>> BWeek in dorpdown: ', await DateElement.btnQuickSelect.getText());
        expect(await DateElement.btnQuickSelect).toHaveTextContaining('Past hours minutes'); 
    });

    it('should select 30 days option', async () => {
        await DateElement.selectBtnQuickSelect();
        await DateElement.quickSelectPanel.scrollIntoView();
        await DateElement.select30d();
        console.log('---->>>>> 30d: ', await DateElement.btnQuickSelect.getText());
        expect(await DateElement.btnQuickSelect).toHaveTextContaining('Past 4 weeks 2 days');    
    });

    it('should select 1 week option', async () => {
        await DateElement.selectBtnQuickSelect();
        await DateElement.quickSelectPanel.scrollIntoView();
        await DateElement.select1Week();
        console.log('---->>>>> 1 week from dropdown: ', await DateElement.btnQuickSelect.getText());
        expect(await DateElement.btnQuickSelect).toHaveTextContaining('Past 1 week');   
    });

    it('should select 3 days option', async () => {
        await DateElement.selectBtnQuickSelect();
        await DateElement.quickSelectPanel.scrollIntoView();
        await DateElement.select3days();
        console.log('---->>>>> 3 d: ', await DateElement.btnQuickSelect.getText());
        expect(await DateElement.btnQuickSelect).toHaveTextContaining('Past 3 days');   
    });

    it('should select 24 hours option', async () => {
        await DateElement.selectBtnQuickSelect();
        await DateElement.quickSelectPanel.scrollIntoView();
        await DateElement.select24h();
        console.log('---->>>>> 24h from dropdown: ', await DateElement.btnQuickSelect.getText());
        expect(await DateElement.btnQuickSelect).toHaveTextContaining('Past 24 hours');
    });

    it('should select 3 hours option', async () => {
        await DateElement.selectBtnQuickSelect();
        await DateElement.quickSelectPanel.scrollIntoView();
        await DateElement.select3h();
        console.log('---->>>>> 3h from dropdown: ', await DateElement.btnQuickSelect.getText());
        expect(await DateElement.btnQuickSelect).toHaveTextContaining('Past 3 hours');
    });

    it('should select 1 hour option', async () => {
        await DateElement.selectBtnQuickSelect();
        await DateElement.quickSelectPanel.scrollIntoView();
        await DateElement.select1h();
        console.log('---->>>>> 1h from dropdown: ', await DateElement.btnQuickSelect.getText());
        expect(await DateElement.btnQuickSelect).toHaveTextContaining('Past 1 hour');
    });

});




