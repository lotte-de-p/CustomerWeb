import { TestBed } from '@angular/core/testing';
import { SalesStepperComponent } from './sales-stepper.component';
import { StepFacade } from '@sales/shared/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { when } from 'jest-when';
import { StoreModule } from '@ngrx/store';

describe('SalesStepperComponent', () => {
  let component: SalesStepperComponent;
  let facade: StepFacade;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [TranslateModule.forRoot(), HttpClientModule, StoreModule.forRoot({})],
      providers: [provideMockStore({}), { provide: 'Window', useValue: {} }],
    }).compileComponents();
    const fixture = TestBed.createComponent(SalesStepperComponent);
    facade = TestBed.inject(StepFacade);
    component = fixture.componentInstance;
  });
  describe('ngOnInit', () => {
    it('should go to the first step', () => {
      when(jest.spyOn(facade, 'goToFirstStep')).mockImplementation(() => {
        return;
      });
      component.ngOnInit();
      expect(facade.goToFirstStep).toHaveBeenCalled();
    });
  });

  describe('goToPreviousStep', () => {
    it('should go to the previous step', () => {
      when(jest.spyOn(facade, 'goToPreviousStep')).mockImplementation(() => {
        return;
      });
      component.goToPreviousStep();
      expect(facade.goToPreviousStep).toHaveBeenCalled();
    });
  });
});
