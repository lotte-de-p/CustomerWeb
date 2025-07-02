import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ImageSrcInterceptorDirective } from '@return-devices/util';
import { AdobeAnalyticsDirective, DatalayerEventNames } from '@telenet/ng-lib-datalayer';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'tg-return-devices-footer',
  templateUrl: './return-devices-footer.component.html',
  imports: [TranslateModule, ImageSrcInterceptorDirective, AdobeAnalyticsDirective],
})
export class ReturnDevicesFooterComponent {
  @Input() returnPointUrl!: string;
  @Input() telenetStoreUrl!: string;
  @Input() imagePath!: string;
  @Input() isBaseCustomer!: boolean;
  @Input() messageGroupName!: string;

  @Output() printReturnLabelClick = new EventEmitter<void>();
  protected readonly DatalayerEventNames = DatalayerEventNames;

  onGenerateReturnLabelClick(): void {
    this.printReturnLabelClick.emit();
  }
}
