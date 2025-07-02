import { UntilDestroy } from '@ngneat/until-destroy';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@UntilDestroy()
@Component({
  selector: 'tg-sim-management-mobile-line-details-help-with-e-sim-card',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './help-with-e-sim-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpWithESimCardComponent implements OnInit {
  @Input() eSimInformationUrl: string;
  @Input() deviceSupportsESimUrl: string;
  items: { title: string; description: string; url: string; testId: string }[];

  ngOnInit(): void {
    this.items = [
      {
        title: 'ng.sim-management.link.what-is-e-sim',
        description: 'ng.sim-management.txt.what-is-e-sim',
        url: this.eSimInformationUrl,
        testId: 'sim-management-help-esim-what-is-e-sim-link',
      },
      {
        title: 'ng.sim-management.link.supported-devices-e-sim',
        description: 'ng.sim-management.txt.supported-devices-e-sim',
        url: this.deviceSupportsESimUrl,
        testId: 'sim-management-help-e-sim-devices-supported-link',
      },
    ];
  }
}
