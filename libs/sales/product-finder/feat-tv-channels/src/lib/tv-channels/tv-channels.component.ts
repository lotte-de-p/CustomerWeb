import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageSrcInterceptorDirective } from '@sales/shared/util';
import { Observable, of } from 'rxjs';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { CheckboxComponent, CheckboxWithImage, MultiSelectCheckboxWithImageComponent } from '@sales/shared/ui';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TvChannels, TvChannelsFacade } from '@sales/product-finder/data-access';

@Component({
  selector: 'tg-sales-tv-channels',
  standalone: true,
  templateUrl: './tv-channels.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CheckboxComponent,
    NgIf,
    AsyncPipe,
    ImageSrcInterceptorDirective,
    TranslateModule,
    NgForOf,
    MultiSelectCheckboxWithImageComponent,
    FormsModule,
  ],
})
export class TvChannelsComponent {
  readonly tvChannels$: Observable<TvChannels> = this.tvChannelsFacade.tvChannels$;
  readonly checkboxes$: Observable<CheckboxWithImage[]> =
    this.languageService.getLanguage() === LanguageEnum.FR
      ? of([
          {
            key: 'BELGIUM',
            label: 'ng.product-finder.step-tv-channels.belgium',
            imgSrc: '/assets/sales/product-finder/tv-channels/fr/belgium.png',
          },
          {
            key: 'FRENCH_SPEAKING',
            label: 'ng.product-finder.step-tv-channels.french-speaking',
            imgSrc: '/assets/sales/product-finder/tv-channels/fr/french-speaking.png',
          },
          {
            key: 'KIDS',
            label: 'ng.product-finder.step-tv-channels.kids',
            imgSrc: '/assets/sales/product-finder/tv-channels/fr/kids.png',
          },
          {
            key: 'SPORTS',
            label: 'ng.product-finder.step-tv-channels.sports',
            imgSrc: '/assets/sales/product-finder/tv-channels/fr/sports.png',
          },
          {
            key: 'FLEMISH_FR',
            label: 'ng.product-finder.step-tv-channels.flemish',
            imgSrc: '/assets/sales/product-finder/tv-channels/fr/flemish.png',
          },
          {
            key: 'INTERNATIONAL',
            label: 'ng.product-finder.step-tv-channels.international',
            imgSrc: '/assets/sales/product-finder/tv-channels/fr/international.png',
          },
        ])
      : of([
          {
            key: 'FLEMISH_NL',
            label: 'ng.product-finder.step-tv-channels.flemish',
            imgSrc: '/assets/sales/product-finder/tv-channels/nl/flemish.png',
          },
          {
            key: 'KIDS',
            label: 'ng.product-finder.step-tv-channels.kids',
            imgSrc: '/assets/sales/product-finder/tv-channels/nl/kids.png',
          },
          {
            key: 'SPORTS',
            label: 'ng.product-finder.step-tv-channels.sports',
            imgSrc: '/assets/sales/product-finder/tv-channels/nl/sports.png',
          },
          {
            key: 'SHOWBIZ',
            label: 'ng.product-finder.step-tv-channels.showbiz',
            imgSrc: '/assets/sales/product-finder/tv-channels/nl/showbiz.png',
          },
          {
            key: 'INTERNATIONAL',
            label: 'ng.product-finder.step-tv-channels.international',
            imgSrc: '/assets/sales/product-finder/tv-channels/nl/international.png',
          },
          {
            key: 'FRENCH',
            label: 'ng.product-finder.step-tv-channels.french',
            imgSrc: '/assets/sales/product-finder/tv-channels/nl/french.png',
          },
          {
            key: 'THEME',
            label: 'ng.product-finder.step-tv-channels.theme',
            imgSrc: '/assets/sales/product-finder/tv-channels/nl/theme.png',
          },
        ]);
  readonly showAtLeastOneValueSelectedError$ =
    this.tvChannelsFacade.hasErrorRequireAtLeastOneTvChannelToBeSelectedError$;

  constructor(
    private readonly tvChannelsFacade: TvChannelsFacade,
    private readonly languageService: LanguageService
  ) {}

  updateTvChannels(selection: string[]): void {
    this.tvChannelsFacade.updateTvChannels({ selection });
  }
}
