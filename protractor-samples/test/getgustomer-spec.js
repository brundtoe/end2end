/**
 * jstraining get customer
 */
describe('Get customer from jstraining', function () {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
    });

    it ('page should have title Get Customer JSON', function () {
        browser.get('http://localhost:3000/promise/PromiseCustomer.html');
        expect(browser.getTitle()).toEqual('Get Customer JSON');
    });
});
