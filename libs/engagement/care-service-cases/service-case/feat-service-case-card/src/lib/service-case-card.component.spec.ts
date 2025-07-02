import { TestBed } from '@angular/core/testing';
import { ServiceCaseFacade } from '@care-service-cases/service-case/data-access';
import { MockProvider } from 'ng-mocks';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ServiceCaseCardComponent } from './service-case-card.component';

describe('ServiceCaseCardComponent', () => {
  let component: ServiceCaseCardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [ServiceCaseCardComponent, StoreModule.forRoot({}), EffectsModule.forRoot([]), HttpClientTestingModule],
      providers: [MockProvider(ServiceCaseFacade), { provide: 'Window', useValue: {} }],
    });
    component = TestBed.createComponent(ServiceCaseCardComponent).componentInstance;
  });

  it('should initialize', () => {
    expect(component).toBeDefined();
  });
});
