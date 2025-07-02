import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Chip, MultipleSelectChipComponent } from '@sales/shared/ui';
import { AsyncPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { MobileUsage, MobileUsageFacade } from '@sales/product-finder/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { ImageSrcInterceptorDirective } from '@sales/shared/util';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tg-sales-mobile-usage',
  standalone: true,
  templateUrl: './mobile-usage.component.html',
  imports: [
    AsyncPipe,
    TranslateModule,
    ImageSrcInterceptorDirective,
    MultipleSelectChipComponent,
    FormsModule,
    NgForOf,
    NgIf,
    NgClass,
  ],
})
export class MobileUsageComponent {
  readonly chips$: Observable<Chip[]> = of([
    {
      key: 'CALLING_AND_MESSAGING',
      icon: 'icon icon-phone-message',
      label: 'ng.product-finder.step-mobile-usage.calling-and-messaging',
    },
    {
      key: 'SOCIAL_MEDIA',
      icon: 'icon icon-like',
      label: 'ng.product-finder.step-mobile-usage.social-media',
    },
    {
      key: 'MUSIC_STREAMING',
      icon: 'icon icon-speaker',
      label: 'ng.product-finder.step-mobile-usage.music-streaming',
    },
    {
      key: 'VIDEO_STREAMING',
      icon: 'icon icon-play-square',
      label: 'ng.product-finder.step-mobile-usage.video-streaming',
    },
    {
      key: 'GPS',
      icon: 'icon icon-location-pin',
      label: 'ng.product-finder.step-mobile-usage.gps',
    },
    {
      key: 'NEWS',
      icon: 'icon icon-article',
      label: 'ng.product-finder.step-mobile-usage.news',
    },
    {
      key: 'MESSAGING',
      icon: 'icon icon-messaging',
      label: 'ng.product-finder.step-mobile-usage.messaging',
    },
    {
      key: 'GAMING',
      icon: 'icon icon-game-controller',
      label: 'ng.product-finder.step-mobile-usage.gaming',
    },
  ]);
  readonly mobileUsage$: Observable<MobileUsage> = this.mobileUsageFacade.mobileUsage$;
  readonly showAtLeastOneValueSelectedError$: Observable<boolean> =
    this.mobileUsageFacade.hasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine$;

  constructor(private readonly mobileUsageFacade: MobileUsageFacade) {}

  updateMobileLineSelection(index: number, selection: string[]): void {
    this.mobileUsageFacade.updateMobileLineSelection(index, selection);
  }

  updateMobileLineCollapsed(index: number, collapsed: boolean): void {
    this.mobileUsageFacade.updateMobileLineCollapsed(index, collapsed);
  }
}
