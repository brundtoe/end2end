describe('Get Customer via promise', () => {

    it('Should display "Training Samples"', async() => {
        await page.goto('http://localhost:3000/promise/default.html')
        const title = await page.title()
        expect(title).toMatch('Training Samples')
    })

    it('Should display customer no 25',async() => {
        await page.goto('http://localhost:3000/promise/PromiseCustomer.html');
        await page.waitFor('input[name=CustomerID]');
//    await page.focus('#CustomerID');
//    await page.keyboard.type('8');
        await page.type('[name=CustomerID]','25');
        await page.click('input[type="submit"]');
        await page.waitForSelector('#id-Name');
        const result = await page.evaluate(() => {
            const customer = document.querySelector('#id-Name');
            return customer.textContent
        });
        expect(result).toEqual('pieter tristan')
    })
    it('Should display error message customer not found',async() => {
        await page.goto('http://localhost:3000/promise/PromiseCustomer.html');
        await page.waitFor('input[name=CustomerID]');
        await page.focus('#CustomerID');
        await page.keyboard.type('888');
        await page.click('input[type="submit"]');
        const errorText = 'Der er ikke fundet en kunde med dette kundenummer';
        await page.waitForSelector('#hovsa');
        const result = await page.evaluate(() => {
            const err = document.querySelector('#hovsa');
            return err.textContent
        });
        expect(result).toMatch(errorText)
    })
})
