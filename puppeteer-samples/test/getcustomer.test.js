describe('Google', () => {

    it('Should display "Training Samples"', async() => {
        await page.goto('http://localhost:3000/promise/default.html')
        const title = await page.title()
        await expect(title).toMatch('Training Samples')
    })
})
