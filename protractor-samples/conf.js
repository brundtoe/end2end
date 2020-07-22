exports.config = {
    directConnect: true,
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./test/*spec.js'],
    capabilities: {
        browserName: 'chrome',
        'chromeOptions':{
            args: ["--headless"]
        }
    }
};
