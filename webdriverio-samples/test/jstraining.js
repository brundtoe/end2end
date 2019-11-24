const assert = require('assert');

describe('Jstraining pages',  () => {
    it('should have the title Training Samples', () => {
        browser.url('http://localhost:3000/index.html');
        const title = browser.getTitle();
        assert.strictEqual(title, 'Training Samples')
    });

    it('should have the Link text Promise', () => {
        browser.url('http://localhost:3000/index.html');
        const link = $("#promise");
        console.log('Der er noget galt')
        //console.log(link.getText());
        assert.strictEqual(link.getText(),'Promise')
        link.click()
        browser.url('http://localhost:3000/promise/PromiseCustomer.html')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Get Customer JSON')
    })

})
