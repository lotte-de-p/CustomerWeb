import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AddressInterface, FiberStatusEnum, FormatAddressPipe } from '@address-checker/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { AddressViewerComponent } from '@address-checker/ui';
import { AssetService } from '@telenet/ng-lib-page';
import { WinkButton, WinkLink, WinkParagraph, WinkTitle } from '@telenet/wink-ng';

@UntilDestroy()
@Component({
  selector: 'tg-fiber-ready',
  templateUrl: './fiber-ready.component.html',
  standalone: true,
  providers: [],
  imports: [
    TranslateModule,
    NgTemplateOutlet,
    AddressViewerComponent,
    CommonModule,
    FormatAddressPipe,
    NgOptimizedImage,
    WinkTitle,
    WinkParagraph,
    WinkButton,
    WinkLink,
  ],
})
export class FiberReadyComponent {
  @Input() messageGroupName: string;
  @Input() address: AddressInterface;
  @Input() status: FiberStatusEnum;
  @Input() isLoggedIn: boolean;
  @Input() urlRequestSubscription: string;
  @Input() firstName: string;
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
