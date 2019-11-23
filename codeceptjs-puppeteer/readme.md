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

## Installation med Puppeteer

```
npm i codeceptjs puppeteer
```

## Initialisering

```
npx codeceptjs init
```
Under initialiseringen vælges Puppeteer som helper.

Initialiseringen opretter en konfigurationsfil **codecept.conf.js**

## opret testcases

```
npx codeceptjs gt
```

## Eksekver test

```
npx codeceptjs run
npx codeceptjs run -c my.codecept.conf.js
```
