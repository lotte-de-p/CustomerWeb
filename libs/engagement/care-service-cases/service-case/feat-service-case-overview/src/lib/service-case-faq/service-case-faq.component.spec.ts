import { TestBed } from '@angular/core/testing';
import { ServiceCaseFaqComponent } from './service-case-faq.component';
import { ServiceCase, ServiceCasesDatalayerService, Type } from '@care-service-cases/service-case/data-access';
import { MockComponent } from 'ng-mocks';
import { AccordionComponent } from '@care-service-cases/service-case/ui';
import { expect } from '@jest/globals';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

describe('ServiceCaseIconComponent', () => {
  let component: ServiceCaseFaqComponent;
  let serviceCasesDatalayerService: ServiceCasesDatalayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockComponent(AccordionComponent)],
      imports: [
        ServiceCaseFaqComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [TranslateService, { provide: 'Window', useValue: {} }],
    });
    serviceCasesDatalayerService = TestBed.inject(ServiceCasesDatalayerService);
    component = TestBed.createComponent(ServiceCaseFaqComponent).componentInstance;
  });

  it('should initialize', () => {
    expect(component).toBeDefined();
  });

  it('should get number of questions per service case type', () => {
    expect(component.getQuestions({ type: Type.TAKEOVER } as ServiceCase)).toBe(1);
    expect(component.getQuestions({ type: Type.INSTALL } as ServiceCase)).toBe(3);
    expect(component.getQuestions({ type: Type.MOVE } as ServiceCase)).toBe(3);
    expect(component.getQuestions({ type: Type.REPAIR } as ServiceCase)).toBe(2);
    expect(component.getQuestions({ type: Type.HOME_DELIVERY } as ServiceCase)).toBe(3);
    expect(component.getQuestions({ type: Type.OTHER } as ServiceCase)).toBe(0);
  });

  it('should send analytics event when toggled', () => {
    jest.spyOn(serviceCasesDatalayerService, 'sendDataLayerEventWithAttributes');
    component.faqToggle(true, { type: Type.REPAIR } as ServiceCase, 0);
    expect(serviceCasesDatalayerService.sendDataLayerEventWithAttributes).toHaveBeenCalled();
  });
});
