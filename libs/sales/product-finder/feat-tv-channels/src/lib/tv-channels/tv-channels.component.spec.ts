import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TvChannelsComponent } from './tv-channels.component';
import { StoreModule } from '@ngrx/store';
import {
  ProductFinderNgrxModule,
  ProductFinderStepperNgrxModule,
  TvChannelsFacade,
} from '@sales/product-finder/data-access';
import { LanguageEnum, LanguageService, TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { CheckboxWithImage } from '@sales/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

describe('TvChannelsComponent', () => {
  let component: TvChannelsComponent;
  let fixture: ComponentFixture<TvChannelsComponent>;
  let tvChannelsFacade: TvChannelsFacade;
  let languageService: LanguageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(),
        EffectsModule.forRoot(),
        TgTranslateTestingModule.forRoot(),
        ProductFinderNgrxModule,
        ProductFinderStepperNgrxModule,
        HttpClientModule,
      ],
    }).compileComponents();

    jest.spyOn(console, 'log').mockImplementation(jest.fn);
    tvChannelsFacade = TestBed.inject(TvChannelsFacade);
    languageService = TestBed.inject(LanguageService);

    fixture = TestBed.createComponent(TvChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('create', () => {
    it('should have french checkboxes', fakeAsync(() => {
      jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.FR);
      const frenchCheckboxes: CheckboxWithImage[] = [
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
      ];

      fixture = TestBed.createComponent(TvChannelsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      component.checkboxes$.subscribe((checkBoxes: CheckboxWithImage[]) => {
        expect(checkBoxes).toEqual(frenchCheckboxes);
        expect(component).toBeTruthy();
      });
      tick();
    }));

    it('should have dutch checkboxes', fakeAsync(() => {
      jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.NL);
      const dutchCheckboxes: CheckboxWithImage[] = [
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
      ];

      fixture = TestBed.createComponent(TvChannelsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      component.checkboxes$.subscribe((checkBoxes: CheckboxWithImage[]) => {
        expect(checkBoxes).toEqual(dutchCheckboxes);
        expect(component).toBeTruthy();
      });
      tick();
    }));
  });

  it('updateTvChannels should call mobileUsageFacade updateTvChannels', () => {
    const selection: string[] = ['FLEMISH'];
    const updateTvChannelsSpy = jest.spyOn(tvChannelsFacade, 'updateTvChannels');

    component.updateTvChannels(selection);

    expect(updateTvChannelsSpy).toHaveBeenCalledWith({ selection });
  });
});
