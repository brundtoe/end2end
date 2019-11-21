exports.config = {
    tests: './test/*_test.js',
    output: './output',
    helpers: {
        WebDriver: {
            url: 'http://localhost:3000',
            browser: 'firefox',
            desiredCapabilities: {
              'moz:firefoxOptions': {
                args: ["-headless"]
              }
            }
        }
    },
    include: {},
    bootstrap: null,
    mocha: {},
    name: 'codecept-webdriver'
}
