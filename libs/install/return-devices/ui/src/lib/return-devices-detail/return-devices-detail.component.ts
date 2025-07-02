import { CommonModule, CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Device, ReturnStatusEnum } from '@return-devices/data-access';
import { ImageSrcInterceptorDirective } from '@return-devices/util';
import { LanguageService } from '@telenet/ng-lib-page';
import { AdobeAnalyticsDirective, DatalayerEventNames } from '@telenet/ng-lib-datalayer';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'tg-return-devices-detail',
  templateUrl: './return-devices-detail.component.html',
  imports: [CommonModule, TranslateModule, ImageSrcInterceptorDirective, CurrencyPipe, AdobeAnalyticsDirective],
})
export class ReturnDevicesDetailComponent {
  @Input() device!: Device;
  @Input() imagePath!: string;
  @Input() messageGroupName!: string;
  @Output() toggleDeviceClick = new EventEmitter<Device>();
  @Output() printReturnLabelClick = new EventEmitter<void>();

  ReturnStatusEnum = ReturnStatusEnum;

  private readonly languageService: LanguageService = inject(LanguageService);

  get locale() {
    return this.languageService.getLocaleString();
  }

  onToggleClick(): void {
    this.toggleDeviceClick.emit(this.device);
  }

  onGenerateReturnLabelClick(): void {
    this.printReturnLabelClick.emit();
  }

  protected readonly DatalayerEventNames = DatalayerEventNames;
}
