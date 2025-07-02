import { Component, EventEmitter, forwardRef, inject, Injector, Input, Optional, Output } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { LanguageService } from '@telenet/ng-lib-page';
import { TimeslotMomentEnum } from '../../../../enums';
import { FormErrorService, MessageGroupDirective } from '../../../../errors';
import { AppointmentTransformerSlot } from '../../../../models';
import { DefaultDateSlideConfig, DefaultTimeslotMoments } from '../../constants';
import { AppointmentInterface, SlideConfigInterface, TimeslotAvailabilityInterface } from '../../interfaces';
import { AppointmentPickerUtil } from '../../utils';
import { Observable } from 'rxjs';
import { TimeslotUtil } from '../../../../utils';

@Component({
  selector: 'app-form-new-appointment-picker',
  templateUrl: './new-appointment-picker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNewAppointmentPickerComponent),
      multi: true,
    },
  ],
})
export class InputNewAppointmentPickerComponent implements ControlValueAccessor {
  @Input() timeslots: AppointmentTransformerSlot[];
  @Input() updateSlots: AppointmentTransformerSlot[];
  @Input() selectableMoments: TimeslotMomentEnum[] = DefaultTimeslotMoments;
  @Input() showLoadMore: boolean;
  @Input() dateSlideConfig: SlideConfigInterface = DefaultDateSlideConfig;
  @Output() loadMore = new EventEmitter();
  private readonly formBuilder = inject(FormBuilder);
  form: FormGroup = this.formBuilder.group({
    appointment: [null, Validators.required],
    moment: [null, Validators.required],
  });

  availableMoments: TimeslotAvailabilityInterface[];
  appointmentsAvailable$: Observable<boolean>;

  appointment: AppointmentInterface;
  error: unknown;

  public formService: FormErrorService;

  constructor(
    public languageService: LanguageService,
    formService: FormErrorService,
    @Optional() public messageGroupDirective: MessageGroupDirective,
    public injector: Injector
  ) {
    this.formService = formService;
    this.form.patchValue({
      appointment: this.appointment?.date,
      moment: this.appointment?.moment,
    });
  }

  onChange(_: AppointmentInterface): void {
    // empty on purpose
  }

  onTouch(_: boolean): void {
    // empty on purpose
  }

  registerOnChange(fn: VoidFunction): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: VoidFunction): void {
    this.onTouch = fn;
  }

  writeValue(value: AppointmentInterface): void {
    if (value) {
      this.appointment = value;
      this.availableMoments = this.setAvailableMoments(value.date as AppointmentTransformerSlot);
      this.form.get('appointment')?.setValue(value.date);
      this.form.get('moment')?.setValue(value.moment);
      this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(this.timeslots);
    }
    if (value && this.timeslots && this.timeslots.every((timeslot) => !timeslot.hasAvailableMoments())) {
      this.availableMoments = this.setAvailableMoments(value.date as AppointmentTransformerSlot);
      this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(this.timeslots);
      this.form.reset();
    }
  }

  selectInstallSlotDay(appointmentSlot: AppointmentTransformerSlot): void {
    this.appointment = InputNewAppointmentPickerComponent.getNewAppointment();
    this.form.get('moment')?.reset(null);
    this.appointment.date = appointmentSlot;
    this.availableMoments = this.setAvailableMoments(appointmentSlot);
    this.onChange(this.appointment);
    this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(this.updateSlots ?? this.timeslots);
  }

  selectMoment(moment: TimeslotMomentEnum): void {
    this.appointment.moment = moment;
    this.onChange(this.appointment);
  }

  private static getNewAppointment(): AppointmentInterface {
    return {
      date: undefined,
      moment: undefined,
    };
  }

  private setAvailableMoments(appointmentSlot: AppointmentTransformerSlot): TimeslotAvailabilityInterface[] {
    let messageGroup = '';
    if (this.messageGroupDirective && this.messageGroupDirective.messageGroup) {
      messageGroup = this.messageGroupDirective.messageGroup;
    }
    return this.selectableMoments.map((selectableMoment: TimeslotMomentEnum) => {
      return {
        timeslot: selectableMoment,
        available: appointmentSlot?.hasAvailableMoment(selectableMoment),
        displayTime: AppointmentPickerUtil.getTimeslotLabel(selectableMoment, messageGroup, 'time'),
        label: AppointmentPickerUtil.getTimeslotLabel(selectableMoment, messageGroup),
      };
    });
  }

  loadMoreSlots() {
    this.loadMore.emit();
  }
}
