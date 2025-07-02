import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Injector,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LanguageService } from '@telenet/ng-lib-page';
import { InputAbstractComponent } from '../../../input-abstract.component';
import { DatePickerLabelsInterface, SlideConfigInterface } from '../../interfaces';
import { TimeslotMomentEnum } from '../../../../enums';
import { DefaultDateSlideConfig } from '../../constants';
import { FormErrorService, MessageGroupDirective } from '../../../../errors';
import { AppointmentPickerUtil } from '../../utils';
import { LabelUtil, TimeslotUtil } from '../../../../utils';
import { AppointmentTransformerSlot } from '../../../../models';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-date-picker',
  templateUrl: './date-picker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDatePickerComponent),
      multi: true,
    },
  ],
})
export class InputDatePickerComponent extends InputAbstractComponent implements OnInit, OnChanges {
  @Input() disableNoAvailableSlots = false;
  @Input() withMoment = false;
  @Input() showLoadMore: boolean;
  @Input() timeslots: AppointmentTransformerSlot[];
  @Input() updateSlots: AppointmentTransformerSlot[];
  @Input() dateSlideConfig: SlideConfigInterface = DefaultDateSlideConfig;
  @Output() loadMore = new EventEmitter();
  labels: DatePickerLabelsInterface;
  selectedTimeslot?: AppointmentTransformerSlot;
  appointmentMomentEnum = TimeslotMomentEnum;
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

  appointmentsAvailable$: Observable<boolean>;
  reRender: boolean;

  constructor(
    public languageService: LanguageService,
    public formService: FormErrorService,
    @Optional() public messageGroupDirective: MessageGroupDirective,
    public injector: Injector,
    private readonly cdr: ChangeDetectorRef
  ) {
    super(languageService, formService, messageGroupDirective, injector);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.setLabels();
    this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(
      this.timeslots ?? [],
      this.disableNoAvailableSlots
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['showLoadMore']) {
      this.showLoadMore = changes['showLoadMore']?.currentValue;
    }

    if (
      changes['updateSlots'] &&
      this.updateSlots &&
      this.timeslots.length > this.updateSlots.length &&
      this.timeslots[this.timeslots.length - this.updateSlots.length - 1].date.toDateString() !==
        this.updateSlots[this.updateSlots.length - 1].date.toDateString()
    ) {
      this.reRender = true;
      setTimeout(() => {
        this.reRender = false;
        this.cdr.detectChanges();
        this.slickModal.slickGoTo(this.timeslots.length - this.updateSlots.length);
      });
      return;
    }

    if (
      changes['updateSlots'] &&
      this.updateSlots &&
      this.timeslots.length > 0 &&
      this.timeslots.every((timeslot) => !timeslot.hasAvailableMoments())
    ) {
      this.timeslots = changes['updateSlots'].currentValue;
      this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(
        this.updateSlots,
        this.disableNoAvailableSlots
      );
    }
  }

  onChange = (_: AppointmentTransformerSlot) => {
    // empty on purpose
  };

  onTouch = (_: boolean) => {
    // empty on purpose
  };

  registerOnChange(fn: VoidFunction): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: VoidFunction): void {
    this.onTouch = fn;
  }

  writeValue(value: AppointmentTransformerSlot): void {
    if (value) {
      this.selectedTimeslot = this.timeslots.find((timeslot) => {
        return AppointmentPickerUtil.compareDate(timeslot, value);
      });
      this.scrollToSelectedSlides();
    }
  }

  selectInstallSlotDay(appointmentSlot: AppointmentTransformerSlot) {
    this.selectedTimeslot = appointmentSlot;
    this.onTouch(true);
    this.onChange(appointmentSlot);
  }

  loadMoreSlots() {
    this.loadMore.emit();
  }

  private scrollToSelectedSlides() {
    if (this.selectedTimeslot) {
      const selectedSlotIndex = AppointmentPickerUtil.getSelectedDateSlotIndex(this.timeslots, this.selectedTimeslot);
      this.dateSlideConfig.initialSlide = AppointmentPickerUtil.getInitialSlideIndex(
        selectedSlotIndex,
        this.dateSlideConfig.slidesToScroll
      );
    }
  }

  private setLabels() {
    this.labels = {
      datePickerLabel: LabelUtil.getLabelKeyWithTypeLabel([this.messageGroup, this.formControlName, 'date-picker']),
      datePickerErrorLabel: LabelUtil.getLabelKeyWithTypeLabel([
        this.messageGroup,
        this.formControlName,
        'date-picker-error',
      ]),
      loadMoreLabel: LabelUtil.getLabelKeyWithTypeLabel([this.messageGroup, this.formControlName, 'load-more']),
    };
  }
}
