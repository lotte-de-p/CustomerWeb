import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Device } from '@return-devices/data-access';
import { ImageSrcInterceptorDirective } from '@return-devices/util';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'tg-return-devices-header',
  templateUrl: './return-devices-header.component.html',
  imports: [TranslateModule, ImageSrcInterceptorDirective],
})
export class ReturnDevicesHeaderComponent {
  @Input() returnDevices: Device[] | undefined;
  @Output() printReturnLabelClick = new EventEmitter<void>();

  onGenerateReturnLabelClick(): void {
    this.printReturnLabelClick.emit();
  }
}
