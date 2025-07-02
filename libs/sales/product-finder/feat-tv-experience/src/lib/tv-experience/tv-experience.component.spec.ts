import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TvExperienceComponent } from './tv-experience.component';
import { StoreModule } from '@ngrx/store';
import {
  ProductFinderNgrxModule,
  ProductFinderStepperNgrxModule,
  TvExperienceFacade,
} from '@sales/product-finder/data-access';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { EffectsModule } from '@ngrx/effects';
import { Checkbox } from '@sales/shared/ui';
import { HttpClientModule } from '@angular/common/http';

describe('TvExperienceComponent', () => {
  let component: TvExperienceComponent;
  let fixture: ComponentFixture<TvExperienceComponent>;
  let tvExperienceFacade: TvExperienceFacade;

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
    tvExperienceFacade = TestBed.inject(TvExperienceFacade);
    fixture = TestBed.createComponent(TvExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('create', () => {
    it('should have tv experience checkboxes', fakeAsync(() => {
      const tvExperienceCheckboxes: Checkbox[] = [
        {
          key: 'TV_BOX',
          label: 'ng.product-finder.step-tv-experience.tv-box',
          iconClass: 'icon-remote',
        },
        {
          key: 'TV_APP',
          label: 'ng.product-finder.step-tv-experience.tv-app',
          iconClass: 'icon-cast',
        },
      ];

      fixture = TestBed.createComponent(TvExperienceComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      component.checkboxes$.subscribe((checkBoxes: Checkbox[]) => {
        expect(checkBoxes).toEqual(tvExperienceCheckboxes);
        expect(component).toBeTruthy();
      });
      tick();
    }));
  });

  it('updateTvExperience should call tvExperienceFacade updateTvExperience', () => {
    const selection: string[] = ['TV_BOX'];
    const updateTvChannelsSpy = jest.spyOn(tvExperienceFacade, 'updateTvExperience');

    component.updateTvExperience(selection);

    expect(updateTvChannelsSpy).toHaveBeenCalledWith({ selection });
  });
});
