/**
 * Her anvendes page.focus til at vælge et input felt
 *
 */
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/promise/GetCustomer.html');
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
    console.log(result);
    await page.screenshot({path: 'customer.png'});
    await browser.close();
})();
