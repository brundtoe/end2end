/**
 * jstraining get customer
 */
describe('Get customer from jstraining', function () {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
    });

    it('find elements on jstraining home page', async () => {
        await browser.get('http://localhost:3000/index.html');
        //const navlist = element.all(by.css('#nav li'))
        const navlist = $$('#nav li');
        expect(navlist.count()).toBe(6);
        expect(navlist.get(0).getText()).toBe('Home');
        const anchor = element.all(by.css('a'));
        expect(anchor.count()).toBe(16);
        const updated = element(by.css('#updated'));
        expect(updated.getText()).toBe('Opdateret juni 2019');
        expect(element(by.css('#nav')).isPresent()).toBe(true);
        expect(browser.getTitle()).toBe("Training Samples");
    });

    it ('page should have title Get Customer JSON', async () => {
        await browser.get('http://localhost:3000/promise/PromiseCustomer.html');
        expect(browser.getTitle()).toEqual('Get Customer JSON');
    });

    it('page should show customer 5', async () => {
        await browser.get('http://localhost:3000/promise/PromiseCustomer.html');
        await element(by.css('[name=CustomerID]')).sendKeys('5');
        await element(by.css('input[type="submit"]')).click();
        const name = await element(by.css('#id-Name'));
        expect(name.getText()).toBe('Sidney Sheldon');
    })
});
