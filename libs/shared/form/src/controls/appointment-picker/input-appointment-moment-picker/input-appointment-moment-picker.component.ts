import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TimeslotMomentEnum } from '../../../enums';
import { AppointmentTransformerSlot } from '../../../models';
import { AppointmentPickerTypeEnum } from '../appointment-picker-type.enum';
import { AppointmentPickerConsumerTypeEnum } from '../../../interfaces';
import { LabelUtil, TimeslotUtil } from '../../../utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-appointment-moment-picker',
  templateUrl: './input-appointment-moment-picker.html',
})
export class InputAppointmentMomentPickerComponent implements OnInit, OnChanges {
  @Input() messageGroup: string;
  @Input() timeslots: AppointmentTransformerSlot[] = [];
  @Input() startDate: Date = new Date();
  @Input() endDate: Date;
  @Input() selectedMoment?: TimeslotMomentEnum;
  @Input() selectedTimeslot?: AppointmentTransformerSlot;
  @Input() consumerType: string;
  @Input() updateSlots: AppointmentTransformerSlot[];
  @Input() isDeviceLandscape: boolean;
  @Input() enableAppointmentsUI: boolean;
  @Input() momentPickerLabel: string;
  @Output() momentSelected = new EventEmitter();
  @Output() scrollTo = new EventEmitter<AppointmentPickerTypeEnum>();
  @Output() loadMore = new EventEmitter();

  appointmentsAvailable$: Observable<boolean>;
  reRender = false;
  disabled: boolean;
  consumerTypeEnum = AppointmentPickerConsumerTypeEnum;
  slideConfig = {
    infinite: false,
    initialSlide: 0,
    mobileFirst: true,
    arrows: true,
    nextArrow: '<div class="cards-slider-button arrow arrow--right slick-arrow" aria-disabled="false"></div>',
    prevArrow: '<div class="cards-slider-button arrow arrow--left slick-arrow" aria-disabled="false"></div>',
    slidesToShow: 5,
    slidesToScroll: 5,
    variableWidth: true,
  };

  isDisabled(moment: TimeslotMomentEnum): boolean {
    this.disabled = true;
    if (this.selectedTimeslot) {
      if (this.selectedTimeslot.hasAvailableMoment(moment)) {
        this.disabled = false;
      }
    } else if (this.timeslots) {
      this.timeslots.forEach((timeslot) => {
        if (timeslot.hasAvailableMoment(moment)) {
          this.disabled = false;
        }
      });
    }
    return this.disabled;
  }

  ngOnInit(): void {
    this.reRender = true;
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      this.slideConfig.arrows = false;
      this.slideConfig.nextArrow = 'false';
      this.slideConfig.prevArrow = 'false';
    }
    setTimeout(() => {
      this.reRender = false;
      this.setSelectedMomentToInitialSlide();
    });
  }

  setSelectedMomentToInitialSlide() {
    if (this.consumerType === this.consumerTypeEnum.NC) {
      if (this.selectedMoment && !this.isDeviceLandscape) {
        this.slideConfig.initialSlide = this.generateMoments().findIndex((moment) => {
          return moment === this.selectedMoment;
        });
      } else {
        this.slideConfig.initialSlide = 0;
      }
    }
  }

  generateMoments(): TimeslotMomentEnum[] {
    const moments = [];
    if (this.consumerType === AppointmentPickerConsumerTypeEnum.NC) {
      moments.push(TimeslotMomentEnum.DAY);
    }
    moments.push(TimeslotMomentEnum.MORNING);
    moments.push(TimeslotMomentEnum.LUNCH);
    moments.push(TimeslotMomentEnum.AFTERNOON);
    moments.push(TimeslotMomentEnum.EVENING);
    return moments;
  }

  getIcon(key: TimeslotMomentEnum): string {
    switch (key) {
      case TimeslotMomentEnum.ALL_DAY:
        return 'allday';
      case TimeslotMomentEnum.DAY:
        return 'day';
      case TimeslotMomentEnum.MORNING:
        return 'morning';
      case TimeslotMomentEnum.EVENING:
        return 'evening';
      case TimeslotMomentEnum.AFTERNOON:
        return 'afternoon';
      case TimeslotMomentEnum.LUNCH:
        return 'lunch';
    }
  }

  getLabel(key: TimeslotMomentEnum, suffix?: string): string {
    let labelKey = 'timeslots.';
    if (this.messageGroup) {
      labelKey = this.messageGroup + '.timeslots.';
    }

    switch (key) {
      case TimeslotMomentEnum.DAY:
        labelKey += 'day';
        break;
      case TimeslotMomentEnum.ALL_DAY:
        labelKey += 'all-day';
        break;
      case TimeslotMomentEnum.MORNING:
        labelKey += 'morning';
        break;
      case TimeslotMomentEnum.LUNCH:
        labelKey += 'lunch';
        break;
      case TimeslotMomentEnum.EVENING:
        labelKey += 'evening';
        break;
      case TimeslotMomentEnum.AFTERNOON:
        labelKey += 'afternoon';
        break;
    }

    if (suffix) {
      labelKey += suffix;
    }

    return LabelUtil.getLabelKeyWithTypeLabel(labelKey);
  }

  selectMoment(moment: TimeslotMomentEnum): void {
    this.momentSelected.emit(moment);
    this.scrollTo.emit(AppointmentPickerTypeEnum.BY_DATE);
  }

  getSlideUpAnimationStyling(index: number): string {
    return '--animation-delay: ' + index;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['moments']) {
      this.reRender = true;
      setTimeout(() => (this.reRender = false));
    }

    if (changes?.['updateSlots']?.currentValue) {
      this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(changes['updateSlots']?.currentValue);
      if (TimeslotUtil.shouldUpdateTimeSlots(this.updateSlots, this.timeslots)) {
        this.timeslots = this.timeslots.concat(changes['updateSlots']?.currentValue);
      }
    }

    if (changes['isDeviceLandscape']) {
      if (this.isDeviceLandscape) {
        this.slideConfig.arrows = true;
        this.slideConfig.slidesToScroll = 3;
        this.slideConfig.slidesToShow = 2;
      } else {
        this.slideConfig.arrows = false;
        this.slideConfig.slidesToScroll = 1;
        this.slideConfig.slidesToShow = 1;
      }
      this.setSelectedMomentToInitialSlide();
      this.reRender = true;
      setTimeout(() => (this.reRender = false));
    }
  }

  getTimeslotMomentDisplay(moment: TimeslotMomentEnum): string {
    const momentObj = this.selectedTimeslot
      ? this.selectedTimeslot.getTimeslotMoment?.(moment)
      : TimeslotUtil.enumToMomentObject(moment);

    const isCustomMoment = this.timeslots && this.timeslots[0] && this.timeslots[0].isCustomMoment;
    if (!this.selectedTimeslot && isCustomMoment) {
      return this.getLabel(moment, '.timings');
    }

    if (momentObj) {
      return `${momentObj.startHours}:${momentObj.startMinutes} - ${momentObj.endHours}:${momentObj.endMinutes}`;
    }
    return '';
  }

  loadMoreSlots() {
    this.loadMore.emit();
  }
}
