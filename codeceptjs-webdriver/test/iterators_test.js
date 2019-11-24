
Feature('Arrayiterator');

Scenario('Should show number of books', (I) => {
    I.amOnPage('http://localhost:3000/index.html')
    I.click("a[href='/iterators/default.html']")
    I.see('Objekter der er iterable')
    I.click("a[href='arrayiterators.html']")
    I.waitForElement('#numbooks')
    I.see('Antal bøger på lager','#numbooks')
    I.see(96,'#numbooks')
});
