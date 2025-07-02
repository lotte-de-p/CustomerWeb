import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSrcInterceptorDirective } from '@sales/shared/util';
import { TranslateModule } from '@ngx-translate/core';
import { Chip, ChipComponent, MultipleSelectChipComponent } from '@sales/shared/ui';
import { Observable, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { InternetUsage, InternetUsageFacade } from '@sales/product-finder/data-access';

@Component({
  selector: 'tg-sales-internet-usage',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ImageSrcInterceptorDirective,
    TranslateModule,
    ChipComponent,
    FormsModule,
    MultipleSelectChipComponent,
  ],
  templateUrl: './internet-usage.component.html',
})
export class InternetUsageComponent {
  readonly internetUsage$: Observable<InternetUsage>;
  readonly showAtLeastOneValueSelectedError$: Observable<boolean> =
    this.internetUsageFacade.hasErrorRequireAtLeastOneInternetUsageToBeSelected$;
  readonly chips$: Observable<Chip[]> = of([
    {
      key: 'SURFING',
      icon: 'icon icon-globe-lines',
      label: 'ng.product-finder.step-internet-usage.surfing',
    },
    {
      key: 'SOCIAL_MEDIA',
      icon: 'icon icon-like',
      label: 'ng.product-finder.step-internet-usage.social-media',
    },
    {
      key: 'MESSAGING',
      icon: 'icon icon-messaging',
      label: 'ng.product-finder.step-internet-usage.messaging',
    },
    {
      key: 'MUSIC_STREAMING',
      icon: 'icon icon-speaker',
      label: 'ng.product-finder.step-internet-usage.music-streaming',
    },
    {
      key: 'VIDEO_STREAMING',
      icon: 'icon icon-play-square',
      label: 'ng.product-finder.step-internet-usage.video-streaming',
    },
    {
      key: 'GAMING',
      icon: 'icon icon-game-controller',
      label: 'ng.product-finder.step-internet-usage.gaming',
    },
    {
      key: 'DOMOTICS',
      icon: 'icon icon-light-bulb',
      label: 'ng.product-finder.step-internet-usage.domotics',
    },
    {
      key: 'HOME_OFFICE',
      icon: 'icon icon-laptop',
      label: 'ng.product-finder.step-internet-usage.home-office',
    },
  ]);

  constructor(private readonly internetUsageFacade: InternetUsageFacade) {
    this.internetUsage$ = this.internetUsageFacade.internetUsage$;
  }

  updateInternetUsage(selection: string[]): void {
    this.internetUsageFacade.updateInternetUsage({ selection });
  }
}
