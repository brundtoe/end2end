describe('Testing array iterators', () => {
    it('should find numbooks', async () => {
        await page.goto('http://localhost:3000');
        await page.click("a[href='/iterators/default.html']");
        await page.click("a[href='arrayiterators.html']");
        await page.waitFor("[id=numbooks]");

        const result = await page.evaluate(() => {
            const book = document.querySelector('#numbooks');
            return book.textContent
        });
        expect(result).toMatch('Antal bøger på lager')
        expect(result).toMatch('96')
    })
})
