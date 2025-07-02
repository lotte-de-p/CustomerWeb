import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { floor } from 'lodash-es';
import { AppointmentPickerTypeEnum } from '../appointment-picker-type.enum';
import { AppointmentTransformerSlot } from '../../../models';
import { TimeslotMomentEnum } from '../../../enums';
import { AppointmentPickerConsumerTypeEnum } from '../../../interfaces';
import { Observable } from 'rxjs';
import { TimeslotUtil } from '../../../utils';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
@Component({
  selector: 'app-form-appointment-date-picker',
  templateUrl: './input-appointment-date-picker.html',
})
export class InputAppointmentDatePickerComponent implements OnInit, OnChanges {
  @Input() messageGroup: string;
  @Input() startDate: Date = new Date();
  @Input() endDate: Date;
  @Input() timeslots: AppointmentTransformerSlot[];
  @Input() selectedTimeslot?: AppointmentTransformerSlot;
  @Input() momentFilter: TimeslotMomentEnum;
  @Input() initialSlide = 0;
  @Input() slidesToScroll: number;
  @Input() slidesToShow: number;
  @Input() updateSlots: AppointmentTransformerSlot[];
  @Input() showLoadMore: boolean;
  @Input() consumerType: string;
  @Input() disableLoadMore: boolean;
  @Input() enableAppointmentsUI: boolean;
  @Input() appointmentPickerType: AppointmentPickerTypeEnum;
  @Input() isDeviceLandscape: boolean;
  @Input() datePickerLabel: string;
  @Output() appointmentSelected = new EventEmitter();
  @Output() loadMore = new EventEmitter();
  @Output() scrollTo = new EventEmitter<AppointmentPickerTypeEnum>();
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

  appointmentsAvailable$: Observable<boolean>;
  currentSlots: AppointmentTransformerSlot[];

  reRender = false;
  noOfAppointmentSlotsPerPage = 14;
  appointmentMomentEnum = TimeslotMomentEnum;
  disablePrevious = true;
  disableNext = false;
  startDateToDisableNext: Date;
  currentDate: Date = new Date();
  consumerTypeEnum = AppointmentPickerConsumerTypeEnum;
  slideConfig = {
    infinite: false,
    initialSlide: 0,
    mobileFirst: true,
    arrows: true,
    nextArrow: '<div class="cards-slider-button arrow arrow--right slick-arrow" aria-disabled="false"></div>',
    prevArrow: '<div class="cards-slider-button arrow arrow--left slick-arrow" aria-disabled="false"></div>',
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 6,
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        },
      },
    ],
  };
  constructor(
    public readonly languageService: LanguageService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  selectInstallSlotDay(appointmentSlot: AppointmentTransformerSlot): void {
    if (
      appointmentSlot.hasAvailableMoments() &&
      (this.momentFilter ? appointmentSlot.hasAvailableMoment(this.momentFilter) : true)
    ) {
      this.selectedTimeslot = appointmentSlot;
      this.appointmentSelected.emit(appointmentSlot);
      this.scrollTo.emit(AppointmentPickerTypeEnum.BY_MOMENT);
    }
  }

  isDisabled(appointmentSlot: AppointmentTransformerSlot): boolean {
    return (
      !appointmentSlot.hasAvailableMoments() ||
      (this.momentFilter ? !appointmentSlot.hasAvailableMoment(this.momentFilter) : false)
    );
  }

  ngOnInit(): void {
    this.slideConfig.slidesToScroll = this.slidesToScroll ? this.slidesToScroll : this.slideConfig.slidesToScroll;
    this.slideConfig.slidesToShow = this.slidesToShow ? this.slidesToShow : this.slideConfig.slidesToShow;
    this.scrollToSelectedSlides();
    if (this.enableAppointmentsUI) {
      this.currentSlots = this.updateSlots?.length > 0 ? this.updateSlots : this.timeslots;
    }
  }

  private scrollToSelectedSlides() {
    if (this.selectedTimeslot) {
      const selectedSlotIndex = this.timeslots.findIndex((slot) => {
        return slot.date.getTime() === this.selectedTimeslot?.date.getTime();
      });
      if (this.consumerType === AppointmentPickerConsumerTypeEnum.NC) {
        this.slideConfig.initialSlide = this.findInitialSlideForNC(selectedSlotIndex);
      } else {
        this.slideConfig.initialSlide = selectedSlotIndex;
      }
    }
  }

  private findInitialSlideForNC(slotIndex: number): number {
    return floor(slotIndex / this.slideConfig.slidesToScroll) * this.slideConfig.slidesToScroll;
  }

  shouldRenderMoment() {
    return !(
      this.consumerType === AppointmentPickerConsumerTypeEnum.NC &&
      this.appointmentPickerType === AppointmentPickerTypeEnum.BY_MOMENT
    );
  }

  getSlideUpAnimationStyling(index: number): string {
    return '--animation-delay: ' + index;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.['momentFilter']) {
      if (this.consumerType === AppointmentPickerConsumerTypeEnum.NC && !this.selectedTimeslot) {
        this.slideConfig.initialSlide = 0;
      }
      this.reRender = true;
      setTimeout(() => (this.reRender = false));
    }

    if (changes?.['showLoadMore']) {
      this.showLoadMore = changes['showLoadMore'].currentValue;
    }
    this.handleUpdateTimeSlots(changes);

    if (changes?.['isDeviceLandscape'] && this.consumerType === AppointmentPickerConsumerTypeEnum.NC) {
      this.configSlideConfig();
      this.reRender = true;
      setTimeout(() => {
        this.reRender = false;
        this.scrollToSelectedSlides();
      });
    }
  }

  private handleUpdateTimeSlots(changes: SimpleChanges) {
    if (changes?.['updateSlots']?.currentValue) {
      if (this.enableAppointmentsUI) {
        this.currentSlots = changes['updateSlots']?.currentValue;
        this.disablePrevious =
          undefined !==
          this.currentSlots.find(
            (timeSlot: AppointmentTransformerSlot) => timeSlot.date.toDateString() === this.currentDate.toDateString()
          );
        this.handleNextButtonDisable();
      }
      this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(changes['updateSlots']?.currentValue);
      if (TimeslotUtil.shouldUpdateTimeSlots(this.updateSlots, this.timeslots)) {
        this.reRender = true;
        this.timeslots = this.timeslots.concat(changes['updateSlots'].currentValue);
        this.reRender = false;
        this.cdr.detectChanges();
        if (!this.enableAppointmentsUI) {
          this.slickModal.slickGoTo(this.timeslots.length - this.updateSlots.length);
        }
      }
    }
  }

  private configSlideConfig() {
    if (this.isDeviceLandscape) {
      this.slideConfig.arrows = true;
      this.slideConfig.slidesToScroll = 4;
      this.slideConfig.slidesToShow = this.slidesToShow ? this.slidesToShow : 1;
    } else {
      this.slideConfig.arrows = false;
      this.slideConfig.slidesToScroll = 2;
      this.slideConfig.slidesToShow = 2;
    }
  }

  loadMoreSlots() {
    this.loadMore.emit();
    if (this.enableAppointmentsUI) {
      this.appointmentSelected.emit(undefined);
      this.disablePrevious = false;
      this.handleNextButtonDisable();
    }
  }

  private handleNextButtonDisable() {
    this.disableNext = this.startDate >= this.endDate;
  }

  loadPreviousSlots() {
    this.loadMore.emit(true);
    this.disableNext = false;
    this.appointmentSelected.emit(undefined);
  }
}
