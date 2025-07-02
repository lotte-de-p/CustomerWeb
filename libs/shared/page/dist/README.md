# ng-lib-page

This library is mostly used for window/page and i18n.

## Usage

In order to install the library, you can use the npm as shown below:

`npm install @telenet/ng-lib-page`

or adding it directly to your package.json

`"@telenet/ng-lib-page": "^1.0.0",`

The components and services from this library can be imported as shown below:

`import {WindowService} from '@telenet/ng-lib-page';`

# Build

Run `ng build ng-lib-page` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

Check our [Confluence page](https://confluence.rel.apps.telenet.be/x/siJfEw).

## Modules

### ImageSrcPathModule

The ImageSrcPathModule defines a directive that is responsible for prefixing assets with a set path.
Depending on the environment a different path should be set (local vs remote environments).

#### Property binding

The ImageSrcPathDirective does property binding on the `src` attribute.
This directive is **not compatible with interpolation** as it uses `@Input` to read out the value being set.

When using the ImageSrcPathModule you should

- Bind the module to the imagePath used for prefixing (coming from an environment file)
  - `ImageSrcPathModule.forRoot("/assets")`
  - e.g. `tcp.angular` ImageSrcPathModule.forRoot(environment.imagePath)
- Use `[src]=""` in your template instead of `src={{}}`
