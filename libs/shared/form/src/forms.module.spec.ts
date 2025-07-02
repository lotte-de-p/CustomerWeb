import { TgFormsModule } from './forms.module';
import { ValueProvider } from '@angular/core';

describe('TgFormsModule', () => {
  it('should instantiate', function () {
    const tgFormsModuleModuleWithProviders = TgFormsModule.forRoot('image');

    const length = tgFormsModuleModuleWithProviders.providers?.length || 0;
    const provider: ValueProvider = tgFormsModuleModuleWithProviders.providers?.[length - 2] as ValueProvider;

    expect(provider.useValue).toEqual('image');
  });
});
