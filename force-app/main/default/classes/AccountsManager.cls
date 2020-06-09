public with sharing class AccountsManager {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccounts(){

        System.debug('getAllAccounts Called');

         return [SELECT id,Name FROM Account];


    }

    @AuraEnabled(cacheable=true)
    public static List<Account> searchAccounts(String searchParam){

        String accNameStr = '%'+searchParam+'%';
        return [SELECT id, Name, Phone, Industry FROM Account WHERE Name LIKE :accNameStr];
        
    }

}
