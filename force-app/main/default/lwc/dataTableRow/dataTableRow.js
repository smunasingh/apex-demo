import { LightningElement, api } from 'lwc';

export default class DataTableRow extends LightningElement {

    @api recordId;
    @api name;
    @api industry;
    @api phone;
    @api iconUrl;

    editClickHandler(event){
        alert('Edit called for : '+this.recordId+' , '+this.name);
        window.open('https://shanaka-lwc-dev-ed.lightning.force.com/lightning/r/Account/'+this.recordId+'/edit', '_self')
    }

    deleteClickHandler(event){
        alert('Delete called');
    }

}