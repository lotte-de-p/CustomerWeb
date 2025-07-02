# Fleet-MFE

## Quick start

- `nx run fleet-mfe:serve`
- `nx run fleet-mfe:test`
- `nx e2e fleet-mfe-e2e --watch`
- `nx run fleet-mfe:lint`
- `nx format:check`

## Angular

#### Run MFE enabled servers

- `nx run fleet-mfe:serve:development`
- `nx run fleet-mfe:serve:production`

#### Run instrumented server for code coverage (no `remoteEntry.js` !)

- `nx run fleet-mfe:serve:coverage`

#### Run the local application with i18n enabled

- uncomment the `pageLocaleData` script in `index.html`
- change the language value to your needs: `nl` | `fr` | `en`

⚠️ comment the `pageLocaleData` script before committing or running Cypress tests

## Jest

- `nx run fleet-mfe:test`

Command to locally simulate pipeline running Fleet MFE Jest tests

- `nx run fleet-mfe:test --base=origin/develop~1 --head=origin/develop --coverage --maxWorkers=1`

## Cypress

### When developing

Start server + start Cypress UI + restart test on code change (browser) :

- `nx e2e fleet-mfe-e2e --watch`
- `nx e2e fleet-mfe-e2e:e2e-coverage --watch`

### For CLI's

Start server + run Cypress tests (headless)

- `nx e2e fleet-mfe-e2e`
- `nx e2e fleet-mfe-e2e:e2e-coverage`

### Advanced

Run a limited set of tests according to patterns :

- one specific test : `nx e2e fleet-mfe-e2e --spec=**/**bundle-usage-reminders.spec.cy.ts`
- one specific folder : `nx e2e fleet-mfe-e2e --spec=**/**fleet-acount**/*`

Headless run against other base url : `nx e2e fleet-mfe-e2e --baseUrl=https://some.frontend.com`

If you run the server yourself :

- Navigate to `./apps/fleet/fleet-mfe-e2e` and execute `cypress open`

## Lint

- `nx run fleet-mfe:lint`
- `nx run fleet-mfe-e2e:lint`
