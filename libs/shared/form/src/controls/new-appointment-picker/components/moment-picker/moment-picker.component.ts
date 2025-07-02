import { Component, forwardRef, Injector, Input, OnInit, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LanguageService } from '@telenet/ng-lib-page';
import { AppointmentTransformerSlot } from '../../../../models';
import { InputAbstractComponent } from '../../../input-abstract.component';
import { MomentPickerLabelsInterface, TimeslotAvailabilityInterface } from '../../interfaces';
import { TimeslotMomentEnum } from '../../../../enums';
import { FormErrorService, MessageGroupDirective } from '../../../../errors';
import { LabelUtil } from '../../../../utils';

@Component({
  selector: 'app-form-moment-picker',
  templateUrl: './moment-picker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputMomentPickerComponent),
      multi: true,
    },
  ],
})
export class InputMomentPickerComponent extends InputAbstractComponent implements OnInit {
  @Input() timeslot?: AppointmentTransformerSlot;
  @Input() availableMoments: TimeslotAvailabilityInterface[];
  labels: MomentPickerLabelsInterface;

  selectedMoment?: TimeslotMomentEnum;

  constructor(
    public languageService: LanguageService,
    public formService: FormErrorService,
    @Optional() public messageGroupDirective: MessageGroupDirective,
    public injector: Injector
  ) {
    super(languageService, formService, messageGroupDirective, injector);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.setLabels();
  }

  onChange = (_: TimeslotAvailabilityInterface | unknown): void => {
    // empty on purpose
  };

  onTouch = (_: boolean): void => {
    // empty on purpose
  };

  registerOnChange(fn: VoidFunction): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: VoidFunction): void {
    this.onTouch = fn;
  }

  writeValue(value: TimeslotMomentEnum | null): void {
    if (value) {
      this.selectedMoment = this.availableMoments?.find((moment) => {
        return moment?.timeslot === value;
      })?.timeslot;
    } else {
      this.selectedMoment = undefined;
      if (this.control.valueChanges) {
        this.valueChangesSubscription$?.unsubscribe();
        this.error = null;
      }
    }
  }

  selectMoment(moment: TimeslotAvailabilityInterface) {
    this.onChange(moment.timeslot);
  }

  private setLabels() {
    this.labels = {
      momentPickerLabel: LabelUtil.getLabelKeyWithTypeLabel([this.messageGroup, this.formControlName, 'moment-picker']),
      momentPickerErrorLabel: LabelUtil.getLabelKeyWithTypeLabel([
        this.messageGroup,
        this.formControlName,
        'moment-picker-error',
      ]),
    };
  }
}
