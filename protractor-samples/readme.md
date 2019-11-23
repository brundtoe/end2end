# Afprøvning af protractor end2end test

Opdateret november 2019

npm versionen er 5.4.1 med jasmine 2.8.1. opgradering afventer selenium.webdriver frigives i version 4.0.0.


## IMPORTANT

Protractor er reelt kun anvendeligt til brug ved test af Angular Applikationer, da Protractor API er målrettet herimod.

## installation

```
npm i protractor
```

Opdatering af webdriver-manager:

```
npx webdriver-manager update
```

Starte og standse selenium serveren::

```
npx webdriver-manager start
npx webdriver-manager shutdown
```

Server status vises på http://localhost:444/wd/hub

## konfiguration

Protractor anvender en konfigurationsfil som eksporterer et JavaScript objekt med konfigurationsoplysningerne.

Minimum er en konfig fil **conf.js**:

```
exports.config = {
    seleniumAddress: 'http://localhost:444/wd/hub',
    specs: ['todo-spec.js']
};
```

## indledende afprøvning med Jasmine

Jasmine er default testframework og en integreret del af node modulet Protractor.

test udføres:

- selenium serveren startes **npx webdriver-manager start**
- test case udføres **npx protractor conf.js**

## Protractor konfigurationen

- Chrome er default browserdriveren der anvendes
- Jasmine er default testframework
- optionen **directConnect:true** gør det overflødigt at anvende webdriver-manager. 


### running Protractor testcases

**Hvis en enkelt testcase køres, så fejler testen ofte, selvom den burde være successfull**

Fejlen opstår typisk med Firefox i directConnect true.

Fejlen er ikke set med Chrome.

Fejlen kan måske skyldes manglende await eller browser cache ved **directConnect: true**


**Når Angular ikke anvendes** på de websider der testes, så skal Angular disables med::

   beforeEach(function () {
        browser.waitForAngularEnabled(false);
    });

Denne **beforeEach** funktion indsættes i en **describe** block

