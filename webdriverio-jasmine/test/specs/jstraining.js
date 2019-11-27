describe('Jstraining pages',  () => {
    it('should have the title Training Samples', () => {
        browser.url('http://localhost:3000/index.html');
        const title = browser.getTitle();
        expect(title).toBe('Training Samples')
    });

    it('should have the Link text Promise', () => {
        browser.url('http://localhost:3000/index.html');
        const link = $("\=Promise");
        console.log('Der er noget galt')
        //console.log(link.getText());
        expect(link.getText()).toBe('Promise')
        link.click()
        browser.url('http://localhost:3000/promise/PromiseCustomer.html')
        const title = browser.getTitle()
        expect(title).toBe('Get Customer JSON')
    })

})
