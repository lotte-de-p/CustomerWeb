import { NgModule } from '@angular/core';
import { LineIdentificationDetailsComponent } from './line-identification-details/line-identification-details.component';
import { LoaderModule } from '@telenet/ng-lib-page';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { MessagesModule } from '@telenet/ng-lib-message';
import { TgFormsModule } from '@telenet/ng-lib-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { LineAddressDetailsComponent } from './line-address-details/line-address-details.component';
import { MsaContainerComponent } from './msa/msa.container';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    LoaderModule,
    LoginModule,
    MessagesModule,
    TgFormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatDialogModule,
    MatTabsModule,
    FormsModule,
  ],
  declarations: [],
  exports: [],
})
export class FleetProfileModule {
  static components = {
    'tg-line-identification-details': LineIdentificationDetailsComponent,
    'tg-line-address-details': LineAddressDetailsComponent,
    'tg-msa': MsaContainerComponent,
  };
}
