import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { TreatmentMessageComponent } from './billing-overview-treatment-message.component';
import { CollectionsTreatmentMessage } from '@billing/invoice-overview/data-access';

describe('TreatmentMessageComponent', () => {
  let component: TreatmentMessageComponent;
  let fixture: ComponentFixture<TreatmentMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreatmentMessageComponent, TranslateModule.forRoot()],
      declarations: [],
      providers: [
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

    fixture = TestBed.createComponent(TreatmentMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct message for AVOID_EXTRA_COSTS', () => {
    setTreatMentDetails(CollectionsTreatmentMessage.AVOID_EXTRA_COSTS);
    expect(component.message).toBe('ng.billing-overview.lbl.treatment-message-avoid-extra-costs');

    setTreatMentDetails(CollectionsTreatmentMessage.AVOID_SUSPENDED_SERVICES);
    expect(component.message).toBe('ng.billing-overview.lbl.treatment-message-avoid-suspended-services');

    setTreatMentDetails(CollectionsTreatmentMessage.RESUME_SUSPENDED_SERVICES);
    expect(component.message).toBe('ng.billing-overview.lbl.treatment-message-resume-suspended-services');
  });

  function setTreatMentDetails(treatmentMessage: CollectionsTreatmentMessage) {
    component.collectionsTreatmentMessage = treatmentMessage;
    fixture.detectChanges();
  }
});
