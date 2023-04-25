import LoginPage from '../../pageobjects/login/login_page.js';
import FindDevice from '../../pageobjects/GDLTAQ-15/find_device_page.js';

describe('Zenoss Application', () => {
  it('Login page', async () => {
    await LoginPage.open();
    await LoginPage.login('admin@elm1403-test.com', 'D0gP0und!');
    await browser.pause(1000 * 3);
  });

  it('Find a device', async () => {
    await FindDevice.searchDevice('qa-centos-6.zenoss.lab');
  });

  it('Device details', async () => {
    await FindDevice.deviceDetailUUID();
    await expect(FindDevice.contentUUID).toHaveTextContaining(
      '6c9c1f23-e7de-4741-9867-3c71f46ea148'
    );
    // await browser.pause(1000 * 2);
  });
});
