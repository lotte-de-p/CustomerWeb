# address-checker-mfe

## Quick start

- `nx run address-checker-mfe:storybook`
- `nx run address-checker-mfe-e2e:e2e-local`
- `nx run address-checker-mfe:lint`
- `nx run address-checker-mfe:serve`
- `nx run address-checker-mfe:test`
- `nx e2e address-checker-mfe-e2e --watch`
- `npm run format`

## Angular

#### Run MFE enabled servers

- `nx run address-checker-mfe:serve:development`
- `nx run address-checker-mfe:serve:production`

#### Run instrumented server for code coverage (no `remoteEntry.js` !)

- `nx run address-checker-mfe:serve:coverage`

#### Run the local application with i18n enabled

- find the `pageLocaleData` script in `index.html`
- change the language value to your needs: `nl` | `fr` | `en`

## Jest

- `nx run address-checker-mfe:test`

Command to locally simulate pipeline running Address Checker MFE Jest tests

- `nx run address-checker-mfe:test --base=origin/develop~1 --head=origin/develop --coverage --maxWorkers=1`

## Cypress

### When developing

Start server + start Cypress UI + restart test on code change (browser) :

- `nx e2e address-checker-mfe-e2e --watch`
- `nx e2e address-checker-mfe-e2e:e2e-coverage --watch`

### For CLI's

Start server + run Cypress tests (headless)

- `nx e2e address-checker-mfe-e2e`
- `nx run address-checker-mfe-e2e:e2e-local`
- `nx e2e address-checker-mfe-e2e:e2e-coverage`

### Advanced

Run a limited set of tests according to patterns :

- one specific test : `nx e2e address-checker-mfe-e2e --spec=**/**address-checker.component.cy.ts`
- one specific folder : `nx e2e address-checker-mfe-e2e --spec=**/**app**/*`

Headless run against other base url : `nx e2e address-checker-mfe-e2e --baseUrl=https://some.frontend.com`

If you run the server yourself :

- Navigate to `./apps/activate/address-checker-mfe-e2e` and execute `cypress open`

## Lint

- `nx run address-checker-mfe:lint`
- `nx run address-checker-mfe-e2e:lint`

## Storybook

- [Stage](https://customer-web-address-checker.aem-modules-stage.awscloud.external.telenet.be/storybook/?path=/story/addresscheckercomponent--primary)
- [Dev](https://customer-web-address-checker-mfe.aem-modules-dev.awscloud.external.telenet.be/storybook/?path=/story/addresscheckercomponent--primary)
- [Prod](https://customer-web-address-checker-mfe.aem-modules-prod.awscloud.external.telenet.be/storybook/?path=/story/addresscheckercomponent--primary)
