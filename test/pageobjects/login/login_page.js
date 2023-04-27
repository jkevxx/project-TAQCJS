import Page from './page.js';

class LoginPage extends Page {
  get inputUsername() {
    return $('//*[@id="username"]');
  }

  get inputPassword() {
    return $('//*[@id="password"]');
  }

  get btnContinue() {
    return $(
      '/html/body/div/main/section/div/div/div/div/div/form/div[2]/button'
    );
  }

  get btnSubmit() {
    return $('/html/body/div/main/section/div/div/div/form/div[2]/button');
  }

  get btnAlert() {
    return $('button[class="v-btn v-btn--text theme--dark elevation-0 v-size--default"]');
  }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.btnContinue.click();
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();

    if(await this.btnAlert.isDisplayed()){
      await this.btnAlert.click();
    }
  }

  open() {
    return super.open('#/');
  }
}

export default new LoginPage();
