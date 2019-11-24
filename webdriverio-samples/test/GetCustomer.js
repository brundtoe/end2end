const assert = require('assert');

describe('Jstraining pages',  () => {

    it('Get Customer number 17',  () => {
        browser.url('http://localhost:3000/promise/PromiseCustomer.html')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Get Customer JSON')
        const field = $('#CustomerID')
        field.setValue(17)
        const button = $('#myButton')
        button.click()
        const customer = $('#id-Email')
        const email = customer.getText()
        assert.strictEqual(email,'johnsen@anymail.com')
    })

})
