describe('Fetch json Object iterator', () => {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
    });

    it('It should find customers', async () => {
        await browser.get('http://localhost:3000/iterators/fetchJson.html');
        expect(browser.getTitle()).toBe('Hent Json');
        const numCustomers = element.all(by.css('tr'))
        expect(numCustomers.count()).toBe(29)
        const customer = browser.findElement(by.id('customer-7'))
        expect(customer.getText()).toMatch('Brian Garfield')

    })
});
