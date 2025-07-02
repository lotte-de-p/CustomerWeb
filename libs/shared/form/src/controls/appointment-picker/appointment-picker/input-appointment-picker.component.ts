import {
  Component,
  ComponentRef,
  ElementRef,
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
  ViewContainerRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { LanguageService } from '@telenet/ng-lib-page';
import { FormErrorService, MessageGroupDirective } from '../../../errors';
import { AppointmentTransformerSlot } from '../../../models';
import { InputAbstractComponent } from '../../input-abstract.component';
import { AppointmentPickerComponentInterface } from '../appointment-picker-component.interface';
import { AppointmentPickerTypeEnum } from '../appointment-picker-type.enum';
import { AppointmentSlotOption } from '../appointment-slot-option.model';
import { InputAppointmentPickerByMomentComponent } from '../appointment-picker-by-moment';
import { InputAppointmentPickerByDateComponent } from '../appointment-picker-by-date';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-form-appointment-picker',
  templateUrl: './input-appointment-picker.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputAppointmentPickerComponent),
      multi: true,
    },
  ],
})
export class InputAppointmentPickerComponent extends InputAbstractComponent implements OnInit, OnChanges {
  @Input() startDate: Date = new Date();
  @Input() endDate: Date;
  @Input() timeslots: AppointmentTransformerSlot[];
  @Input() slidesToScroll: number;
  @Input() slidesToShow: number;
  @Input() appointmentPickerType: AppointmentPickerTypeEnum;
  @Input() updateSlots: AppointmentTransformerSlot[];
  @Input() showLoadMore: boolean;
  @Input() consumerType: string;
  @Input() disableLoadMore: boolean;
  @Input() declare error: ValidationErrors;
  @Input() isDeviceLandscape: boolean;
  @Input() reset: boolean;
  @Input() enableAppointmentsUI: boolean;
  @Output() loadMore = new EventEmitter();
  @Output() scrollTo = new EventEmitter();
  @Output() sendAnalytics = new EventEmitter();
  @ViewChild('appointmentPickerComponent', { static: true }) appointmentPickerComponent: ElementRef;

  componentRef: ComponentRef<unknown>;
  selectedAppointmentSlotOption: AppointmentSlotOption;

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    @Optional() public override messageGroupDirective: MessageGroupDirective,
    public override languageService: LanguageService,
    private readonly formErrorService: FormErrorService,
    public override injector: Injector
  ) {
    super(languageService, formErrorService, messageGroupDirective, injector);
  }

  onChange = (_: AppointmentSlotOption) => {
    // empty implementation
  };

  onTouched = () => {
    // empty implementation
  };

  override ngOnInit(): void {
    super.ngOnInit();
    this.initMessageGroup();
    this.loadAppointmentPickerComponent();
  }

  override setError(value?: unknown): void {
    if (value) {
      (this.componentRef.instance as AppointmentPickerComponentInterface).error = Object.keys(value)[0];
    } else {
      (this.componentRef.instance as AppointmentPickerComponentInterface).error = null;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appointmentPickerType']) {
      this.formErrorService.reset$.next(null);
      this.appointmentPickerType = changes['appointmentPickerType'].currentValue;
      this.loadAppointmentPickerComponent();
    }
    if (changes['reset']?.currentValue) {
      this.loadAppointmentPickerComponent();
    }

    if (changes['showLoadMore']) {
      (this.componentRef.instance as AppointmentPickerComponentInterface).showLoadMore = this.showLoadMore;
    }

    if (changes['updateSlots']) {
      (this.componentRef.instance as AppointmentPickerComponentInterface).updateSlots = this.updateSlots;
    }

    if (changes['disableLoadMore']) {
      (this.componentRef.instance as AppointmentPickerComponentInterface).disableLoadMore = this.disableLoadMore;
    }

    if (changes['error']) {
      this.setError(this.error);
    }

    if (changes['isDeviceLandscape']) {
      (this.componentRef.instance as AppointmentPickerComponentInterface).isDeviceLandscape = this.isDeviceLandscape;
    }
  }

  override registerOnChange(fn: VoidFunction): void {
    this.onChange = fn;
  }

  override registerOnTouched(fn: VoidFunction): void {
    this.onTouched = fn;
  }

  override setDisabledState(_: boolean): void {
    // empty implementation
  }

  override writeValue(appointmentSlotOption: AppointmentSlotOption | null): void {
    if (appointmentSlotOption) {
      this.selectedAppointmentSlotOption = appointmentSlotOption;
      (this.componentRef.instance as AppointmentPickerComponentInterface).setSelectedAppointment(appointmentSlotOption);
    }
  }

  private loadAppointmentPickerComponent(): void {
    this.viewContainerRef.clear();
    const component =
      this.appointmentPickerType === AppointmentPickerTypeEnum.BY_DATE
        ? InputAppointmentPickerByDateComponent
        : InputAppointmentPickerByMomentComponent;
    this.componentRef = this.viewContainerRef.createComponent(component);
    this.componentRef.changeDetectorRef.detectChanges();
    this.setSelectedAppointment(new AppointmentSlotOption(null, null));
    (this.componentRef.instance as AppointmentPickerComponentInterface).startDate = this.startDate;
    (this.componentRef.instance as AppointmentPickerComponentInterface).endDate = this.endDate;
    (this.componentRef.instance as AppointmentPickerComponentInterface).timeslots = this.timeslots;
    (this.componentRef.instance as AppointmentPickerComponentInterface).slidesToScroll = this.slidesToScroll;
    (this.componentRef.instance as AppointmentPickerComponentInterface).appointmentSlotSelected
      .pipe(untilDestroyed(this))
      .subscribe((selectedAppointment) => {
        this.setSelectedAppointment(selectedAppointment);
      });
    (this.componentRef.instance as AppointmentPickerComponentInterface).messageGroup = this.messageGroup;
    (this.componentRef.instance as AppointmentPickerComponentInterface).initialised = true;
    (this.componentRef.instance as AppointmentPickerComponentInterface).setLabels([
      this.messageGroup || '',
      this.formControlName,
    ]);
    (this.componentRef.instance as AppointmentPickerComponentInterface).error = this.error;
    (this.componentRef.instance as AppointmentPickerComponentInterface).updateSlots = this.updateSlots;
    (this.componentRef.instance as AppointmentPickerComponentInterface).showLoadMore = this.showLoadMore;
    (this.componentRef.instance as AppointmentPickerComponentInterface).loadMore
      ?.pipe(untilDestroyed(this))
      .subscribe((value) => {
        this.loadMore.emit(value);
      });
    (this.componentRef.instance as AppointmentPickerComponentInterface).consumerType = this.consumerType;
    (this.componentRef.instance as AppointmentPickerComponentInterface).disableLoadMore = this.disableLoadMore;
    (this.componentRef.instance as AppointmentPickerComponentInterface).scrollTo
      ?.pipe(untilDestroyed(this))
      .subscribe((section) => {
        this.scrollTo.emit(section);
      });
    (this.componentRef.instance as AppointmentPickerComponentInterface).slidesToShow = this.slidesToShow;
    (this.componentRef.instance as AppointmentPickerComponentInterface).appointmentPickerType =
      this.appointmentPickerType;
    (this.componentRef.instance as AppointmentPickerComponentInterface).isDeviceLandscape = this.isDeviceLandscape;
    (this.componentRef.instance as AppointmentPickerComponentInterface).enableAppointmentsUI =
      this.enableAppointmentsUI;
  }

  private setSelectedAppointment(selectedAppointment: AppointmentSlotOption): void {
    this.onChange(selectedAppointment);
    this.sendAnalytics.emit(selectedAppointment);
    this.onTouched();
    (this.componentRef.instance as AppointmentPickerComponentInterface).error = null;
  }
}
