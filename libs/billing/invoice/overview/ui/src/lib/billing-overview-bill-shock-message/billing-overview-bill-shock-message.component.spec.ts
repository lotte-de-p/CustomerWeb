import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MockProvider } from 'ng-mocks';
import { BillingScenarioName } from '@billing/invoice-overview/data-access';
import {
  BillingOverviewBillShockMessageComponent,
  ShockMessageDetails,
} from './billing-overview-bill-shock-message.component';

describe('BillingOverviewBillShockMessageComponent', () => {
  let component: BillingOverviewBillShockMessageComponent;
  let fixture: ComponentFixture<BillingOverviewBillShockMessageComponent>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingOverviewBillShockMessageComponent, TranslateModule.forRoot()],
      declarations: [],
      providers: [
        MockProvider(TranslateService),
        {
          provide: 'Window',
          useValue: {
            location: { href: '' },
            document: {
              documentElement: {
                lang: 'en',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingOverviewBillShockMessageComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    component.scenario = {} as BillingScenarioName;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct bill shock details', () => {
    const scenarioName: BillingScenarioName = BillingScenarioName.CABLE_CONNECTION;
    const baseKey = `ng.billing-overview.lbl.bill-shock-${scenarioName.toString().toLowerCase().replace(/_/g, '-')}`;
    const headlineKey = `${baseKey}-headline`;
    const captionKey = `${baseKey}-caption`;

    jest.spyOn(translateService, 'instant').mockImplementation((key: string | string[]) => key);

    const expectedDetails: ShockMessageDetails = {
      headline: headlineKey,
      description: '',
      buttonText: '',
      caption: captionKey,
    };
    const details = component.getBillShockDetails(scenarioName);
    expect(details).toEqual(expectedDetails);
  });

  it('should return translated bill shock details', () => {
    const scenarioName: BillingScenarioName = BillingScenarioName.DUPLICATE;
    const baseKey = `ng.billing-overview.lbl.bill-shock-${scenarioName.toString().toLowerCase().replace(/_/g, '-')}`;
    const headlineKey = `${baseKey}-headline`;
    const descriptionKey = `${baseKey}-description`;
    const buttonTextKey = `${baseKey}-button`;
    const captionKey = `${baseKey}-caption`;

    jest.spyOn(translateService, 'instant').mockImplementation((key: string | string[]) => {
      switch (key) {
        case headlineKey:
          return 'Translated Headline';
        case descriptionKey:
          return 'Translated Description';
        case buttonTextKey:
          return 'Translated Button Text';
        case captionKey:
          return 'Translated Caption Text';
        default:
          return key;
      }
    });

    const expectedDetails: ShockMessageDetails = {
      headline: 'Translated Headline',
      description: 'Translated Description',
      buttonText: 'Translated Button Text',
      caption: 'Translated Caption Text',
    };

    const details = component.getBillShockDetails(scenarioName);
    expect(details).toEqual(expectedDetails);
  });
});
