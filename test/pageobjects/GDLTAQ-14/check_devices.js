class CheckDevices {
    get buttonExplore() {
      return $('.zone-link-btn.v-btn.v-btn--has-bg.theme--dark.elevation-0.v-size--default');

    }
    get selectKubernetes() {
        //return $('span.subNode*=Kubernetes').parent().parent(); 

    }

    async clickButton() {
        await this.buttonExplore.click();
      }
    async clickKubernetes() {
        await browser.url('https://elm1403-test.zenoss.io/cz0/zport/dmd/itinfrastructure#devices:.zport.dmd.Devices.Kubernetes');
        //await this.selectKubernetes.click();
    }


    
}
  export default new CheckDevices();




