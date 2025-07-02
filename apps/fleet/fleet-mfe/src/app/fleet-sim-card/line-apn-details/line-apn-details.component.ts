import { Component, Input } from '@angular/core';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { LineApnDetailsConstants } from './constants/line-apn-details.constants';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';
import { LoginModule } from '@telenet/ng-lib-ocapi';

@Component({
  selector: 'tg-line-apn-details',
  templateUrl: './line-apn-details.component.html',
  standalone: true,
  imports: [LoginModule, NgIf, TranslateModule],
})
export class LineApnDetailsComponent extends AbstractBaseComponent {
  @Input()
  changeAPN?: string;

  @Input()
  orderNewAPN?: string;

  messageGroupName = LineApnDetailsConstants.MESSAGE_GROUP;
  scopes = LineApnDetailsConstants.SCOPES;

  constructor() {
    super();
  }
}
