import LoginPage from '../../pageobjects/login/login_page.js';
import FindDevice from '../../pageobjects/GDLTAQ-15/find_device_page.js';

describe('Login Zenoss Application', () => {
  it('Should get access to login page', async () => {
    await LoginPage.open();
    await LoginPage.login('admin@elm1403-test.com', 'D0gP0und!');
  });

  it('Should show alert message', async () => {
    await browser.pause(1000 * 2);
    await LoginPage.alertMessage();
  });
});

describe('Find device', () => {
  it('Should find a device', async () => {
    await FindDevice.searchDevice('qa-centos-6.zenoss.lab');
  });

  it('Should verify for device details', async () => {
    await FindDevice.deviceDetailUUID();
    await expect(FindDevice.contentUUID).toBeDisplayed();
    // await browser.pause(1000 * 2);
  });
});
