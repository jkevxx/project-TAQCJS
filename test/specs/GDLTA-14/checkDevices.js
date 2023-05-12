import LoginPage from '../../pageobjects/login/login_page.js';
import CheckDevices from '../../pageobjects/GDLTAQ-14/check_devices.js';

describe('Zenoss Application', () => {
  it('Login page', async () => {
    await LoginPage.open();
    await LoginPage.login('admin@elm1403-test.com', 'D0gP0und!');
    //await browser.pause(1000 * 3);
  });

  it('should handle alert message', async () => {
    await browser.pause(1000 * 2);
    await LoginPage.alertMessage();
  });

  it('Click on explore button', async () => {
    await CheckDevices.clickButton();
    await browser.pause(1000 * 3);
  });

  it('Click on Kubernetes', async () => {
    await CheckDevices.clickKubernetes();
    await browser.pause(1000 * 3);
  });
});
