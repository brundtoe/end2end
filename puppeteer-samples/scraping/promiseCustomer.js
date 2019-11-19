const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/promise/PromiseCustomer.html');
    await page.waitFor('input[name=CustomerID]');
    await page.$eval('input[name=CustomerID]', el => el.value = '5' );
    await page.click('input[type="submit"]');
    await page.waitForSelector('#id-Email');
    const result = await page.evaluate(() => {
       const customer = document.querySelector('#id-Email');
       return customer.textContent
    });
    console.log(result);
    await page.screenshot({path: 'customer.png'});
    await browser.close();
})();
