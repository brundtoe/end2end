describe('Testing array iterators', () => {
    it('should find numbooks', () => {
        browser.url('http://localhost:3000');
        const iterators = browser.$("a[href='/iterators/default.html']");
        iterators.click()
        const arrayIterators = browser.$("a[href='arrayiterators.html']");
        arrayIterators.click()
        expect(browser.getTitle()).toBe('Array Iterators')
        const numbooks = browser.$('#numbooks')
        const onHand = browser.$('#onhand')
        expect(numbooks.getText()).toMatch('Antal bøger på lager')
        expect(onHand.getText()).toBe('96')

    })
})
