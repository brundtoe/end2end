# end2end testing with codecept

Opdateret november 2019

# Introduktion

CodeceptJS er en videreudvikling af Codeception, der er et testframework for PHP basert på PHPUnit.

CodeceptJS er et node modul, som anvendes til end2end testing

Codecept skal anvende en browser driver herunder bl.a.

- Puppeteer
- Protractor
- Webdriver
- TestCafé

## Installation med Webdriver

```
npm i codeceptjs selenium-standalone webdriverio
```

## Initialisering

```
npx codeceptjs init
```
Under initialiseringen vælges Webdriver som helper.

Initialiseringen opretter en konfigurationsfil **codecept.conf.js**

Derefter installeres chrome og firefox driverne
```
npx selenium-standalone install
```

## opret testcases

```
npx codeceptjs gt
```

## Eksekver test

```
npx codeceptjs run
npx codeceptjs run -c my.codecept.conf.js
```
