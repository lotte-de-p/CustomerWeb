import { IonicPortalModule } from '@telenet/ng-lib-ionic-portal';
import { importProvidersFrom } from '@angular/core';

export const APP_CONFIG = {
  providers: [importProvidersFrom(IonicPortalModule)],
};
