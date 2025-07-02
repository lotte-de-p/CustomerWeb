import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { installationTypeFeature } from './installation-type.reducer';

@NgModule({
  imports: [StoreModule.forFeature(installationTypeFeature)],
})
export class InstallationTypeNgrxModule {}
