import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfSimsComponent } from './number-of-sims.component';
import {
  NumberOfSimsFacade,
  ProductFinderNgrxModule,
  ProductFinderStepperNgrxModule,
} from '@sales/product-finder/data-access';
import { StoreModule } from '@ngrx/store';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageSrcInterceptorDirective } from '@sales/shared/util';
import { CounterComponent } from '@sales/shared/ui';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

describe('NumberOfSimsComponent', () => {
  let component: NumberOfSimsComponent;
  let fixture: ComponentFixture<NumberOfSimsComponent>;
  let numberOfSimsFacade: NumberOfSimsFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(),
        EffectsModule.forRoot(),
        ProductFinderNgrxModule,
        ProductFinderStepperNgrxModule,
        TgTranslateTestingModule.forRoot(),
        ReactiveFormsModule,
        ProductFinderNgrxModule,
        ImageSrcInterceptorDirective,
        CounterComponent,
        HttpClientModule,
      ],
    }).compileComponents();

    jest.spyOn(console, 'log').mockImplementation(jest.fn);
    numberOfSimsFacade = TestBed.inject(NumberOfSimsFacade);
    fixture = TestBed.createComponent(NumberOfSimsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should select numberOfSims and set numberOfSimsForm value', () => {
      const count = { numberOfSims: 1 };

      component.ngOnInit();

      expect(component.numberOfSimsForm.value).toEqual(count);
    });

    it('should subscribe to numberOfSimsForm valueChanges and update numberOfSims', () => {
      const numberOfSims = 1;
      jest.spyOn(numberOfSimsFacade, 'updateNumberOfSims');

      component.ngOnInit();
      component.numberOfSimsForm.controls['numberOfSims'].setValue(1);
      fixture.detectChanges();

      expect(component.numberOfSimsForm.value).toEqual({ numberOfSims: 1 });
      expect(numberOfSimsFacade.updateNumberOfSims).toHaveBeenCalledWith(numberOfSims);
    });
  });
});
