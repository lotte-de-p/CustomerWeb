import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AddressInterface, FiberStatusEnum, FormatAddressPipe } from '@address-checker/data-access';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { AddressViewerComponent } from '@address-checker/ui';
import { ThankYouComponent } from '../thank-you/thank-you.component';
import { AssetService } from '@telenet/ng-lib-page';
import { WinkButton, WinkLink, WinkParagraph, WinkTitle } from '@telenet/wink-ng';

@UntilDestroy()
@Component({
  selector: 'tg-fiber-not-ready',
  templateUrl: './fiber-not-ready.component.html',
  standalone: true,
  providers: [],
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    AddressViewerComponent,
    CommonModule,
    ThankYouComponent,
    FormatAddressPipe,
    WinkTitle,
    WinkParagraph,
    WinkLink,
    WinkButton,
  ],
})
export class FiberNotReadyComponent {
  @Input() messageGroupName: string;
  @Input() address: AddressInterface;
  @Input() isLoggedIn: boolean;
  @Input() firstName: string;
  @Input() status: FiberStatusEnum;
  @Input() urlToInfoPage: string;
  @Output() backToAddressSelector = new EventEmitter<void>();
  @Output() toProductPage = new EventEmitter<void>();
  ftthDesktopImage: string = AssetService.getImagePath('FTTH', 'fiber-desktop.png');
  ftthmobileImage: string = AssetService.getImagePath('FTTH', 'fiber-mobile.png');

  toAddressSelector(): void {
    this.backToAddressSelector.emit();
  }

  redirectToProductPage(): void {
    this.toProductPage.emit();
  }
}
