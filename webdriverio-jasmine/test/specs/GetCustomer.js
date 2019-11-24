describe('Jstraining pages',  () => {

    it('Get Customer number 17',  () => {
        browser.url('http://localhost:3000/promise/PromiseCustomer.html')
        const title = browser.getTitle()
        expect(title).toBe('Get Customer JSON')
        const field = $('#CustomerID')
        field.setValue(17)
        const button = $('#myButton')
        button.click()
        const customer = $('#id-Email')
        const email = customer.getText()
        expect(email).toBe('johnsen@anymail.com')
    })

})
