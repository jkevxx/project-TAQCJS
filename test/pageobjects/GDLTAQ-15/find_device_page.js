class FindDevice {
  get inputSearcher() {
    return $('//*[@id="input-47"]');
  }

  get valueSuggester() {
    return $(
      '//*[@id="app"]/div[1]/main/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div[2]/div[2]/div/div'
    );
  }

  get btnDetails() {
    return $(
      '//*[@id="app"]/div[1]/main/div/div/div/div[2]/div/div[1]/div[1]/div/div[1]/div[1]/div/div[1]/div[1]/i'
    );
  }

  get contentUUID() {
    return $(
      '#app > div.v-menu__content.theme--dark.menuable__content__active > div > div > div'
    );
  }

  async searchDevice(deviceName) {
    await this.inputSearcher.setValue(deviceName);
    await this.valueSuggester.click();
  }

  async deviceDetailUUID() {
    await this.btnDetails.click();
  }
}

export default new FindDevice();
