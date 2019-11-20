# Afprøvning af protractor end2end test

Det er efter npm tilføjelse af npx blevet langt enklere at anvende en lokal installation.


## installation

```
npm i protractor
```

Opdatering af webdriver-manager:

```
npx webdriver-manager update
```

Starte selenium serveren::

```
npx webdriver-manager start
```

Server status vises på http://localhost:444/wd/hub

## konfiguration

Protracotr anvender en konfigurationsfil som eksporterer et JavaScript objekt med konfigurationsoplysningerne.

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



