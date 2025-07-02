import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockComponent, MockProvider } from 'ng-mocks';
import { ServiceCaseCardComponent } from '@care-service-cases/service-case/feat-service-case-card';
import { ServiceCaseFacade } from '@care-service-cases/service-case/data-access';
import { ServiceCasesCardComponent } from './service-cases-card.component';
import { ElementRef, Injectable } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Injectable()
export class MockElementRef {
  nativeElement: {
    tag: 'div';
  };
}

describe('ServiceCasesCardComponent', () => {
  let component: ServiceCasesCardComponent;
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
    component = TestBed.createComponent(ServiceCasesCardComponent).componentInstance;
    jest.spyOn(component, 'showSimpleCard');
    facade = TestBed.inject(ServiceCaseFacade);
  });

  it('should trigger hide card after 800ms', () => {
    jest.spyOn(facade, 'loadServiceCases');
    component.initAfterLoggedIn();
    expect(facade.loadServiceCases).toHaveBeenCalled();
    expect(component.showSimpleCard).toHaveBeenCalled();
  });
});
