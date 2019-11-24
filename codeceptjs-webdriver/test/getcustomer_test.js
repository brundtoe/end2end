
Feature('Getcustomer');

Before((I) => {
    I.amOnPage('http://localhost:3000/promise/PromiseCustomer.html');
    I.see('Get Customer data via promise');
});

Scenario('Get customer', (I) => {

    I.fillField('CustomerID','8');
    I.click('Hent kundedata');
    I.waitForElement('#id-Email');
    I.see('forsyth@anymail.com','#id-Email')
});

Scenario('Get customer fails',(I) => {
    I.fillField('CustomerID','0');
    I.click('Hent kundedata');
    const errorText = 'Der er ikke fundet en kunde med dette kundenummer';
    I.waitForElement('#hovsa')
    I.see(errorText,'#hovsa')
})
