export class HomePage{
    get InventoryBtn(){
        return browser.$('#inventory-nav');
    }

    async goToInventory(){
        await this.InventoryBtn.click();
    }
}