const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.click("a[href='/iterators/default.html']");
    await page.click("a[href='arrayiterators.html']");
    await page.waitFor("[id=numbooks]");
    await page.screenshot({path: 'iterators.png'});
    await browser.close();
})();
