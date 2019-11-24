WebdriverIO
===========

Opdateret november 2019

Installation
------------
Webdriver OI CLI::

   npm i --save-dev @wdio/cli

Konfiguration
-------------
Konfiguration udføres med:

```
   npx wdio config -y
```

Der installeres ekstra node packages:

```
 "devDependencies": {
    "@wdio/cli": "^5.16.7",
    "@wdio/local-runner": "^5.16.8",
    "@wdio/mocha-framework": "^5.16.5",
    "@wdio/spec-reporter": "^5.16.5",
    "@wdio/sync": "^5.16.8",
    "chromedriver": "^78.0.1",
    "wdio-chromedriver-service": "^5.0.2"
  }
```

Og oprettes en **wdio.conf.js**

**Default installationen installerer @wdio/sync.**

Dermed fungerer WebdriverIO i synkron mode og async/await kan ikke anvendes

Hvis der i testcases anvendes 3 parts moduler der anvender async/await, så skal testcasen være async og alle kald af browser og elements skal være asynkrone 

Konfigurer med headless Chrome
------------------------------
I **wdio.conf.js** opdateres capabilities med **goog:chromeOptions**::

   capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu', '--window-size=1280,800']
        },
    }],

Ref: https://webdriver.io/docs/configurationfile.html

WebdriverIO API
---------------

Se https://webdriver.io/docs/api.html

Testcases
---------
Testcase i webdriver.io dokumentationen anvender node assert library

**Kan ikke få selector $('=Hent kundedata') til at virker**

Anvender i stedet udelukkende id selector $('#myButton')

Eksekver test
-------------
Test runnes med:
```
   npx wdio wdio.conf.js
```
