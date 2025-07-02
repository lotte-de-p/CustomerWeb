import { Component } from '@angular/core';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { LineMoreDetailsConstants } from './constants/line-more-details.constants';
import { TranslateModule } from '@ngx-translate/core';
import { LoginModule } from '@telenet/ng-lib-ocapi';

@Component({
  selector: 'tg-line-more-details',
  templateUrl: './line-more-details.component.html',
  standalone: true,
  imports: [LoginModule, TranslateModule],
})
export class LineMoreDetailsComponent extends AbstractBaseComponent {
  messageGroupName = LineMoreDetailsConstants.MESSAGE_GROUP;
  scopes = LineMoreDetailsConstants.SCOPES;

  constructor() {
    super();
  }
}
