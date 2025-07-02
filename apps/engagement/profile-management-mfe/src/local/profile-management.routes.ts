import { Routes } from '@angular/router';
import { ManageSocialLoginComponent } from '@profile-management/manage-social-login/feat-manage-social-login';
import { ProfileOverviewComponent } from '@profile-management/profile-overview/feat-profile-overview';
import { ManageAuthenticatorsComponent } from '@profile-management/manage-authenticators/feat-manage-authenticators';

export const profileManagementRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'profile-overview',
  },
  {
    path: 'profile-overview',
    component: ProfileOverviewComponent,
  },
  {
    path: 'manage-social-login',
    component: ManageSocialLoginComponent,
  },
  {
    path: 'manage-authenticators',
    component: ManageAuthenticatorsComponent,
  },
];
