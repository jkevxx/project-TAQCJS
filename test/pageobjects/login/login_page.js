import Page from './url_page.js';

/**
 * containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  get inputUsername() {
    return $('//*[@id="username"]');
  }

  get inputPassword() {
    return $('//*[@id="password"]');
  }

  get btnContinue() {
    return $(
      'body > div > main > section > div > div > div > div > div > form > div.c7f45701e > button'
    );
  }

  get btnSubmit() {
    return $('body > div > main > section > div > div > div > form > div.c7f45701e > button');
  }

  get btnAlert() {
    return $(
      'button[class="v-btn v-btn--text theme--dark elevation-0 v-size--default"]'
    );
  }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.btnContinue.click();
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  open() {
    return super.open('#/');
  }

  async alertMessage() {
    // console.log('-> this is: ' + (await this.btnAlert.isDisplayed()));
    await this.btnAlert.waitForExist({ timeout: 2000 });
    if (await this.btnAlert.isDisplayed()) {
      await this.btnAlert.click();
    }
  }
}

export default new LoginPage();
