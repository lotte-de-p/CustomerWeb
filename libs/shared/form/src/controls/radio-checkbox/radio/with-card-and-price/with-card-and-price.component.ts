import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractRadioComponent } from '../abstract-radio.component';
import { InputOptionWithImage } from '../../../radio';
import { ScreenType } from '../../../../enums';

@Component({
  selector: 'tg-form-radio-with-card-and-price',
  templateUrl: './with-card-and-price.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioWithCardAndPriceComponent),
      multi: true,
    },
  ],
})
export class InputRadioWithCardAndPriceComponent extends AbstractRadioComponent implements OnInit {
  @Input() optionList: InputOptionWithImage[] = [];
  amountOfColumnsClass: string;
  public screenTypeEnum = ScreenType;

  ngOnInit() {
    super.ngOnInit();
    this.amountOfColumnsClass = this.calculateAmountOfColumnsClass();
  }

  private calculateAmountOfColumnsClass(): string {
    if (this.optionList && this.optionList.length <= 5) {
      const amountOfColumns = this.optionList.length;
      return `grid-template-column--${amountOfColumns}--md`;
    }
    return 'grid-template-column--3--md';
  }
}
