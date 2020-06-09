public with sharing class TestClass {
    
    public TestClass() {


    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccounts(){

         return [SELECT id,Name FROM Account];

        //System.debug('Accounts : '+accountsList);

    }

    
}