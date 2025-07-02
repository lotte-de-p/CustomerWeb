import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventFacade } from '@sales/events/data-access';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { TgFormsModule } from '@telenet/ng-lib-form';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { stepLoaded } from '../events/step-loaded.const';
import { StepEasySwitchSelectionComponent } from './step-easy-switch-selection.component';

describe('StepDeliveryComponent', () => {
  let component: StepEasySwitchSelectionComponent;
  let fixture: ComponentFixture<StepEasySwitchSelectionComponent>;
  let eventFacade: EventFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [
        StepEasySwitchSelectionComponent,
        TranslateModule.forRoot(),
        TgFormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}),
      ],
    }).compileComponents();

    eventFacade = TestBed.inject(EventFacade);

    fixture = TestBed.createComponent(StepEasySwitchSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    jest.spyOn(eventFacade, 'triggerEvent').mockReturnValue();
    jest.spyOn(eventFacade, 'triggerAnalyticsClickEvent').mockReturnValue();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('OnInit', () => {
    it('should trigger installationAddressStepLoaded event', () => {
      component.ngOnInit();
      expect(eventFacade.triggerEvent).toHaveBeenCalledWith(stepLoaded);
    });
  });
});
