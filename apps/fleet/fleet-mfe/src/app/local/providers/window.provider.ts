import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

export function provideWindow(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: 'Window',
      useValue: window,
    },
  ]);
}
