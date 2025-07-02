import { Component, OnInit } from '@angular/core';
import { PhoneNumberTransformService } from '@telenet/ng-lib-layout';
import { AbstractBaseComponent, UrlService } from '@telenet/ng-lib-page';
import { LineNumberConstants } from './constants/line-number.constants';
import { NavigationMenuService } from './service/navigation-menu-service';
import { of } from 'rxjs';
import { PhoneNumberPipe } from '../../shared/common/pipes/phone-number.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass, NgIf, AsyncPipe } from '@angular/common';
import { MessagesModule } from '@telenet/ng-lib-message';

@Component({
  selector: 'tg-line-number',
  templateUrl: './line-number.component.html',
  standalone: true,
  imports: [MessagesModule, NgClass, NgIf, TranslateModule, AsyncPipe, PhoneNumberPipe],
})
export class LineNumberComponent extends AbstractBaseComponent implements OnInit {
  messageGroupName = LineNumberConstants.MESSAGE_GROUP;
  lineNumber?: string;
  toggleNavMenu$ = of(false);

  constructor(
    private readonly urlService: UrlService,
    private readonly phoneNumberTransformService: PhoneNumberTransformService,
    private readonly navigationMenuService: NavigationMenuService
  ) {
    super();
  }

  ngOnInit(): void {
    const msisdnFromUrl = this.urlService.getParameterByName(LineNumberConstants.MSISDN);
    if (msisdnFromUrl) {
      this.lineNumber = this.phoneNumberTransformService.autoFormatPhoneNumber(msisdnFromUrl);
      this.toggleNavMenu$ = this.navigationMenuService.getToggleNavMenu();
    }
  }
}
