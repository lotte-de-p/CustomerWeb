import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsScreenComponent } from './results-screen.component';
import { ProductFinderStepperFacade, ResultsScreenFacade } from '@sales/product-finder/data-access';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { provideMockStore } from '@ngrx/store/testing';

describe('ResultsScreenComponent', () => {
  let component: ResultsScreenComponent;
  let fixture: ComponentFixture<ResultsScreenComponent>;
  let resultScreenFacade: ResultsScreenFacade;
  let productFinderStepperFacade: ProductFinderStepperFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TgTranslateTestingModule.forRoot()],
      providers: [provideMockStore()],
    }).compileComponents();

    resultScreenFacade = TestBed.inject(ResultsScreenFacade);
    productFinderStepperFacade = TestBed.inject(ProductFinderStepperFacade);

    fixture = TestBed.createComponent(ResultsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call getProductRecommendations', () => {
      const getProductRecommendationsSpy = jest.spyOn(resultScreenFacade, 'getProductRecommendations');

      component.ngOnInit();

      expect(getProductRecommendationsSpy).toHaveBeenCalled();
    });
  });

  describe('redoTest', () => {
    it('should call productFinderStepperFacade redoTest', () => {
      const redoTestSpy = jest.spyOn(productFinderStepperFacade, 'redoTest');

      component.redoTest();

      expect(redoTestSpy).toHaveBeenCalled();
    });
  });

  describe('order', () => {
    it('should call order', () => {
      const orderSpy = jest.spyOn(resultScreenFacade, 'order');

      component.order(1);

      expect(orderSpy).toHaveBeenCalledWith(1);
    });
  });

  describe('resultDetails', () => {
    it('should call resultDetails', () => {
      const resultDetailsSpy = jest.spyOn(resultScreenFacade, 'resultDetails');

      component.resultDetails(1);

      expect(resultDetailsSpy).toHaveBeenCalledWith(1);
    });
  });
});
