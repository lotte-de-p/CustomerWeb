import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetUsageComponent } from './internet-usage.component';
import { StoreModule } from '@ngrx/store';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import {
  InternetUsageFacade,
  ProductFinderNgrxModule,
  ProductFinderStepperNgrxModule,
} from '@sales/product-finder/data-access';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

describe('InternetUsageComponent', () => {
  let component: InternetUsageComponent;
  let fixture: ComponentFixture<InternetUsageComponent>;
  let internetUsageFacade: InternetUsageFacade;

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

    internetUsageFacade = TestBed.inject(InternetUsageFacade);

    fixture = TestBed.createComponent(InternetUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updateInternetUsage should call internetUsageFacade updateInternetUsage', () => {
    const selection: string[] = ['gaming'];
    const updateInternetUsageSpy = jest.spyOn(internetUsageFacade, 'updateInternetUsage');

    component.updateInternetUsage(selection);

    expect(updateInternetUsageSpy).toHaveBeenCalledWith({ selection });
  });
});
