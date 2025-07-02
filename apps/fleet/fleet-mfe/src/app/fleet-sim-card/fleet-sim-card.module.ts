import { NgModule } from '@angular/core';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { TranslateModule } from '@ngx-translate/core';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { CommonModule } from '@angular/common';
import { LineApnDetailsComponent } from './line-apn-details/line-apn-details.component';
import { LineMoreDetailsComponent } from './line-more-details/line-more-details.component';
import { LineNumberComponent } from './line-number/line-number.component';
import { MessagesModule } from '@telenet/ng-lib-message';
import { LineNavigationListComponent } from './line-navigation-list/line-navigation-list.component';
import { LoaderModule } from '@telenet/ng-lib-page';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { TgFormsModule } from '@telenet/ng-lib-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    TranslateModule,
    LoginModule,
    CommonModule,
    MessagesModule,
    LoaderModule,
    InlineSVGModule,
    TgFormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [],
  exports: [],
})
export class FleetSimCardModule {
  static components = {
    'tg-order-history': OrderHistoryComponent,
    'tg-line-apn-details': LineApnDetailsComponent,
    'tg-line-more-details': LineMoreDetailsComponent,
    'tg-line-number': LineNumberComponent,
    'tg-line-navigation-list': LineNavigationListComponent,
  };
}
