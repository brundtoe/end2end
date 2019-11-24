const assert = require('assert')

describe('Testing array iterators', () => {
    it('should find numbooks', () => {
        browser.url('http://localhost:3000');
        const iterators = browser.$("a[href='/iterators/default.html']");
        iterators.click()
        const arrayIterators = browser.$("a[href='arrayiterators.html']");
        arrayIterators.click()
        const numbooks = browser.$('#numbooks')
        const onHand = browser.$('#onhand')
        assert.strictEqual(numbooks.getText(),'Antal bøger på lager 96')
        assert.strictEqual(onHand.getText(),'96')
        /*
                 page.waitFor("[id=numbooks]");

                const result = await page.evaluate(() => {
                    const book = document.querySelector('#numbooks');
                    return book.textContent
                });
                expect(result).toMatch('Antal bøger på lager')
                expect(result).toMatch('96')

         */
    })


})
