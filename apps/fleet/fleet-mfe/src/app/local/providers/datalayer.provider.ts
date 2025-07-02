import { APP_INITIALIZER, EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { DataLayerServiceProvider, dataLayerServiceProviderFactory } from '@telenet/ng-lib-datalayer';

export function provideDataLayer(): EnvironmentProviders {
  return makeEnvironmentProviders([
    DataLayerServiceProvider,
    {
      provide: APP_INITIALIZER,
      useFactory: dataLayerServiceProviderFactory,
      deps: [DataLayerServiceProvider],
      multi: true,
    },
  ]);
}
