# ng-lib-config

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Build

Run `npx nx run config:build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Using ConfigService locally in your application. Copy this fragment and put in index.html

```html
<script type="text/javascript">
  (function () {
    window.Config = {
      'ocapi-url': 'https://api.int.telenet.be/ocapi',
      'omapi-url': 'https://api.int.telenet.be/omapi',
      'omapi-query-url': 'https://api.int.telenet.be/omapi-query/public',
      'openid-auth-url': 'https://login.int.telenet.be/openid/oauth/authorize',
      'openid-url': 'https://login.int.telenet.be/openid',
      'gateway-url': 'https://api.int.telenet.be',
      'sofy-url': 'https://int.sofy-dev.awscloud.external.telenet.be',
      'gsa-url': 'https://api.int.telenet.be/searchapi/gsa/api/',
      'openid-client-id': 'ocapi',
      'oauth-callback-url': '',
      'php-eshop-url': 'https://shop.int.telenet.be/shop/nl',
      'base-ac-systems-url': 'https://base.rest.ac-systems.com',
      'recaptcha-api-url': 'https://www.google.com/recaptcha/api.js',
      'recaptcha-site-key': '6Ld15hAbAAAAABL4l8LoTnBv-CBkhYE8Ukwc3aMQ',
      'recaptcha-v3-site-key': '6Lc2hCQbAAAAACaxx5NvByzCNYI4NSpgqsrrT4Wp',
      'is-author-mode': 'false',
      'kbc-post-message-receiver-origin-url': 'kbcPostMessageReceiverOriginUrl',
      'oauth-url-pid': 'oauthUrlPid',
      'oauth-callback-url-pid': 'oauthCallbackUrlPid',
      'search-index-parameter': 'searchIndexParameter',
    };
  })();
</script>
```

## Running unit tests

Run `npx nx run config:test` to execute the unit tests via [Jest](https://jestjs.io).
