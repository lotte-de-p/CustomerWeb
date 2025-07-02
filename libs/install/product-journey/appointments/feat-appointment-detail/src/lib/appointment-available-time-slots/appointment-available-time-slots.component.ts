import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appointment, AppointmentFacade, AppointmentNgrxModule } from '@product-journey/appointments/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { MediaQueryService } from '@telenet/ng-lib-page';
import {
  AppointmentPickerTypeEnum,
  AppointmentPickerValidator,
  AppointmentTransformerSlot,
  TgFormsModule,
} from '@telenet/ng-lib-form';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DomService } from '@telenet/ng-lib-shared';
import { LetDirective } from '@ngrx/component';
import { MessagesModule } from '@telenet/ng-lib-message';
import { TimeSlotSkeletonComponent } from '@product-journey/appointments/ui';

@UntilDestroy()
@Component({
  standalone: true,
  selector: 'tg-appointment-available-time-slots',
  templateUrl: './appointment-available-time-slots.component.html',
  imports: [
    CommonModule,
    AppointmentNgrxModule,
    TranslateModule,
    TgFormsModule,
    ReactiveFormsModule,
    LetDirective,
    MessagesModule,
    TimeSlotSkeletonComponent,
  ],
})
export class AppointmentAvailableTimeSlotsComponent implements OnInit, OnChanges {
  @Input() selectedAppointment?: Appointment;
  @Input() availableTimeSlots: AppointmentTransformerSlot[];
  @Input() updatedSlots: AppointmentTransformerSlot[] = [];
  @Input() startDate: Date;
  @Input() disableLoadMore = false;
  @Output() selectedTimeSlot = new EventEmitter<boolean>();
  @Output() loadMoreTimeSlot = new EventEmitter<boolean>();

  private readonly formBuilder = inject(FormBuilder);
  private readonly mediaQueryService = inject(MediaQueryService);
  private readonly ref = inject(ChangeDetectorRef);
  private readonly domService = inject(DomService);
  private readonly appointmentFacade = inject(AppointmentFacade);

  readonly appointmentPickerTypes = AppointmentPickerTypeEnum;
  readonly error$ = this.appointmentFacade.availableTimeSlotError$;
  readonly timeSlotsLoaded$ = this.appointmentFacade.timeSlotsLoaded$;
  messageGroupName = 'available time slot';

  showLoadMore = true;
  hasReset = false;
  selectedAppointmentPickerType: AppointmentPickerTypeEnum = this.appointmentPickerTypes.BY_DATE;
  isDeviceLandscape = false;
  timeSlotForm: FormGroup = this.formBuilder.group({
    appointment: [null],
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['selectedAppointment']?.currentValue !== changes['selectedAppointment']?.previousValue ||
      changes['availableTimeSlots']?.currentValue !== changes['availableTimeSlots']?.previousValue
    ) {
      this.timeSlotForm.reset();
      this.isDeviceLandscape = this.mediaQueryService.isLandscapeMode();
      this.timeSlotForm.addValidators([AppointmentPickerValidator.dayRequired(this.selectedAppointmentPickerType)]);
    }
  }

  ngOnInit(): void {
    this.selectedAppointmentPickerType = this.appointmentPickerTypes.BY_DATE;
    this.timeSlotForm
      ?.get('appointment')
      ?.valueChanges.pipe(untilDestroyed(this))
      .subscribe((value) => {
        this.hasReset = !value;
        if (value?.date && value?.moment) {
          this.selectedTimeSlot.emit(true);
        }
        this.ref.detectChanges();
      });
  }

  loadMoreSlots(loadPreviousSlots?: boolean): void {
    this.loadMoreTimeSlot.emit(loadPreviousSlots);
  }

  scrollToSection(selectedTab: AppointmentPickerTypeEnum): void {
    if (selectedTab === AppointmentPickerTypeEnum.BY_DATE) {
      this.domService.scrollToElement('.section-date');
    } else if (selectedTab === AppointmentPickerTypeEnum.BY_MOMENT) {
      this.domService.scrollToElement('.section-time');
    }
  }

  setAppointmentPickerType(pickerType: AppointmentPickerTypeEnum): void {
    this.selectedTimeSlot.emit(false);
    this.selectedAppointmentPickerType = pickerType;
    this.timeSlotForm.addValidators([AppointmentPickerValidator.dayRequired(pickerType)]);
  }
}
