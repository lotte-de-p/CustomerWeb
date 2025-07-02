import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DetailedSpec } from '@sales/shared/data-access';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-sales-detailed-spec',
  standalone: true,
  templateUrl: './detailed-spec.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, NgForOf, NgIf, TranslateModule],
})
export class DetailedSpecComponent {
  @Input() title: string | undefined;
  @Input() detailedSpecs!: DetailedSpec[];
}
