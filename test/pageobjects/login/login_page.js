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

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.btnContinue.click();
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  open() {
    return super.open('#/');
  }
}

export default new LoginPage();
