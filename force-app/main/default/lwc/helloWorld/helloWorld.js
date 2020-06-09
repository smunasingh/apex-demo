import { LightningElement, track, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountsManager.getAllAccounts';
import searchAccounts from '@salesforce/apex/AccountsManager.searchAccounts';

export default class HelloWorld extends LightningElement {
    
    @track greeting = 'World';
    @wire(getAllAccounts) accounts;

    //Search Accounts
    @track searchKey = '';
    @wire(searchAccounts, { searchParam: '$searchKey' }) filteredAccounts;

    changeHandler(event) {
        this.greeting = event.target.value;
    }

    handleClick(event) {
        alert(this.greeting);
    }


    //Search Accounts
    handleKeyChange(event) {
        
        //Execute only for ENTER key press.
        const isEnterKey = event.keyCode === 13;
        
        if (isEnterKey) {        
            this.searchKey = event.target.value;
            console.log('SearchKey : '+this.searchKey);
        }
    }
    
}