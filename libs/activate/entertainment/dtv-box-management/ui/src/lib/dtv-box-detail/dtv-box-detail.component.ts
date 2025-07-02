import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DtvBox, ImageSrcInterceptorDirective } from '@entertainment/dtv-box-management/data-access';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'tg-entertainment-dtv-box-detail',
  templateUrl: './dtv-box-detail.component.html',
  imports: [CommonModule, TranslateModule, ImageSrcInterceptorDirective],
})
export class DtvBoxDetailComponent {
  @Input() dtvBox!: DtvBox;
  @Input() imagePath!: string;
  @Input() messageGroupName!: string;
}
