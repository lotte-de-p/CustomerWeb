import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppContextService } from './services/app-context-service/app-context.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PortalAuthService } from './services/portal-auth-service/portal-auth.service';

export function initializeApp(appContextService: AppContextService) {
  return () => appContextService.initPortal();
}

@NgModule({
  providers: [
    AppContextService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [AppContextService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PortalAuthService,
      multi: true,
    },
  ],
})
export class IonicPortalModule {}
