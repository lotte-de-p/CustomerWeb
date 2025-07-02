import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { EventFacade } from '@sales/events/data-access';
import { missingDataStepFinished, missingDataStepLoaded } from './missing-data.const';
import { provideNgxMask } from 'ngx-mask';
import { Observable, of } from 'rxjs';
import { MissingDataComponent } from './missing-data.component';
import { MissingDataFacade } from './missing-data.facade';

describe('MissingDataComponent', () => {
  let component: MissingDataComponent;
  let eventFacadeMock: { triggerEvent: jest.Mock };
  let missingDataFacadeMock: {
    missingData$: Observable<{
      identityCardNumber: string;
      nationalRegistryNumber: string;
      isForeignIdentity: boolean;
    }>;
    setMissingData: jest.Mock;
  };

  beforeEach(async () => {
    eventFacadeMock = {
      triggerEvent: jest.fn(),
    };

    missingDataFacadeMock = {
      missingData$: of({
        identityCardNumber: '123456789',
        nationalRegistryNumber: '987654321',
        isForeignIdentity: false,
      }),
      setMissingData: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [
        EffectsModule.forRoot([]),
        StoreModule.forRoot({}),
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      providers: [
        provideMockStore({}),
        provideNgxMask(),
        { provide: EventFacade, useValue: eventFacadeMock },
        { provide: MissingDataFacade, useValue: missingDataFacadeMock },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(MissingDataComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger the event on ngOnInit', () => {
    component.ngOnInit();
    expect(eventFacadeMock.triggerEvent).toHaveBeenCalledWith(missingDataStepLoaded);
  });

  it('should initialize the form correctly', () => {
    component.ngOnInit();
    expect(component.missingDataForm).toBeTruthy();
    expect(component.missingDataForm.controls['belgianEid'].valid).toBeFalsy();
    expect(component.missingDataForm.controls['nationalRegistryNumber'].valid).toBeFalsy();
  });

  it('should fill form with data from state', () => {
    component.ngOnInit();
    component.fillFormFromState();

    expect(component.missingDataForm.value).toEqual({
      belgianEid: '123456789',
      foreignEid: '',
      nationalRegistryNumber: '987654321',
    });
  });

  it('should call setMissingData and triggerEvent on valid form submission in onNextStep', (done) => {
    component.ngOnInit();
    component.missingDataForm.setValue({
      belgianEid: '592-8470056-97',
      foreignEid: '',
      nationalRegistryNumber: '69.10.11-300.16',
    });

    component.onNextStep().subscribe((result) => {
      expect(result).toBe(true);
      expect(missingDataFacadeMock.setMissingData).toHaveBeenCalledWith('69.10.11-300.16', '592-8470056-97', false);
      expect(eventFacadeMock.triggerEvent).toHaveBeenCalledWith(missingDataStepFinished);
      done();
    });
  });

  it('should return false on invalid form submission in onNextStep', () => {
    component.ngOnInit();
    component.missingDataForm.setValue({
      belgianEid: '',
      foreignEid: '',
      nationalRegistryNumber: '',
    });

    component.onNextStep().subscribe((result) => {
      expect(result).toBe(false);
    });

    expect(missingDataFacadeMock.setMissingData).not.toHaveBeenCalled();
    expect(eventFacadeMock.triggerEvent).not.toHaveBeenCalledWith(missingDataStepFinished);
  });

  it('should toggle identity view and update form validators', () => {
    component.ngOnInit();

    expect(component.isBelgianIdentity).toBe(true);

    component.toggleIdentityView();

    expect(component.isBelgianIdentity).toBe(false);

    expect(component.missingDataForm.controls['foreignEid'].validator).toBeTruthy();
    expect(component.missingDataForm.controls['belgianEid'].validator).toBeNull();
  });
});
