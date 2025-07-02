import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { profileManagementConfig } from './local/profile-management.config';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProfileManagementComponent } from './local/profile-management.component';

if (environment.production) {
  enableProdMode();
}
bootstrapApplication(ProfileManagementComponent, profileManagementConfig).catch((err) => console.error(err));
