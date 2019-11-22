describe('Array iterator test', () => {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
    });

    it('It should find numbooks', async () => {
        await browser.get('http://localhost:3000');
        expect(browser.getTitle()).toBe('Training Samples');
        element(by.id("iterators")).click();
        await element(by.css("a[href='arrayiterators.html']")).click();
        const text = await element(by.id("numbooks"));
        const onHand = element(by.id('onhand'));
        expect(text.getText()).toBe('Antal bøger på lager 96');
        expect(onHand.getText()).toBe('96');

    })
});
