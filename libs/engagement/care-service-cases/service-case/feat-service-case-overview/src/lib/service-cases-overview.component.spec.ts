import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockComponent, MockProvider } from 'ng-mocks';
import { ServiceCaseCardComponent } from '@care-service-cases/service-case/feat-service-case-card';
import { ServiceCase, ServiceCaseFacade } from '@care-service-cases/service-case/data-access';
import { ElementRef, Injectable } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ServiceCaseOverviewComponent } from './service-cases-overview.component';

@Injectable()
export class MockElementRef {
  nativeElement: {
    tag: 'div';
  };
}

describe('ServiceCaseOverviewComponent', () => {
  let component: ServiceCaseOverviewComponent;
  let facade: ServiceCaseFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockComponent(ServiceCaseCardComponent)],
      imports: [CommonModule, HttpClientTestingModule, StoreModule.forRoot({}), EffectsModule.forRoot([])],
      providers: [
        MockProvider(ServiceCaseFacade),
        {
          provide: 'Window',
          useValue: {},
        },
        {
          provide: ElementRef,
          useClass: MockElementRef,
        },
      ],
    }).compileComponents();
    component = TestBed.createComponent(ServiceCaseOverviewComponent).componentInstance;
    facade = TestBed.inject(ServiceCaseFacade);
  });

  it('should call facade action after login', () => {
    jest.spyOn(facade, 'loadServiceCases');
    jest.spyOn(facade, 'serviceCasesPageView');
    component.initAfterLoggedIn();
    expect(facade.loadServiceCases).toHaveBeenCalled();
    expect(facade.serviceCasesPageView).toHaveBeenCalled();
  });

  it('should call selectServiceCase on selection', () => {
    jest.spyOn(facade, 'selectServiceCase');
    const serviceCase = {
      id: '12345',
    } as ServiceCase;
    component.selectServiceCase(serviceCase);
    expect(facade.selectServiceCase).toHaveBeenCalledWith(serviceCase);
  });

  it('should call toggleHistory on selection', () => {
    jest.spyOn(facade, 'toggleHistory');
    component.toggleHistoryEvent(true);
    expect(facade.toggleHistory).toHaveBeenCalledWith(true);
  });
});
