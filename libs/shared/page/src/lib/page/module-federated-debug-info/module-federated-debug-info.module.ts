import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { DEBUG_CONFIG_TOKEN, ModuleFederatedDebugInfoService } from './module-federated-debug-info.service';
import { ModuleFederatedDebugInfoModuleConfig } from './shared-lib-config.model';
import { ModuleFederatedDebugInfoComponent } from './module-federated-debug-info.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ModuleFederatedDebugInfoComponent],
  imports: [CommonModule, RouterModule.forRoot([])],
  providers: [ModuleFederatedDebugInfoService],
  exports: [ModuleFederatedDebugInfoComponent],
})
export class ModuleFederatedDebugInfoModule {
  static forRoot(config?: ModuleFederatedDebugInfoModuleConfig): ModuleWithProviders<ModuleFederatedDebugInfoModule> {
    return {
      ngModule: ModuleFederatedDebugInfoModule,
      providers: [
        {
          provide: DEBUG_CONFIG_TOKEN,
          useValue: config,
        },
        ModuleFederatedDebugInfoService,
        {
          provide: APP_INITIALIZER,
          deps: [ModuleFederatedDebugInfoService],
          multi: true,
          useFactory: (service: ModuleFederatedDebugInfoService) => () => initModuleFederatedDebugInfoService(service),
        },
      ],
    };
  }
}

function initModuleFederatedDebugInfoService(service: ModuleFederatedDebugInfoService): Promise<void> {
  // Promise is needed for the useFactory
  return new Promise((resolve) => {
    service.load();
    resolve();
  });
}
