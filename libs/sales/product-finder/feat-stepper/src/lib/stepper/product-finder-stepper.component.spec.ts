import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFinderStepperComponent } from './product-finder-stepper.component';
import { ProductFinderStepperFacade } from '@sales/product-finder/data-access';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

describe('ProductFinderStepperComponent', () => {
  let component: ProductFinderStepperComponent;
  let fixture: ComponentFixture<ProductFinderStepperComponent>;
  let productFinderStepperFacade: ProductFinderStepperFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(), EffectsModule.forRoot(), TgTranslateTestingModule.forRoot(), HttpClientModule],
    }).compileComponents();

    productFinderStepperFacade = TestBed.inject(ProductFinderStepperFacade);

    fixture = TestBed.createComponent(ProductFinderStepperComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('goToPreviousStep should call productFinderStepperFacade goToPreviousStep', () => {
    const goToPreviousStepSpy = jest.spyOn(productFinderStepperFacade, 'goToPreviousStep');

    component.goToPreviousStep();

    expect(goToPreviousStepSpy).toHaveBeenCalled();
  });

  describe('goToNextStep', () => {
    it('should call productFinderStepperFacade nextButtonClicked', () => {
      const nextButtonClickedSpy = jest.spyOn(productFinderStepperFacade, 'nextButtonClicked');

      component.goToNextStep();

      expect(nextButtonClickedSpy).toHaveBeenCalled();
    });
  });
});
