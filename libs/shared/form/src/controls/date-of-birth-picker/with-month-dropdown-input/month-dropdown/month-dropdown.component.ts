import { Component, forwardRef, Injector, Input, OnChanges, OnInit, Optional, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LanguageService } from '@telenet/ng-lib-page';
import { DropdownWithInputComponent } from '../../../dropdown';
import { FormErrorService, MessageGroupDirective } from '../../../../errors';
import { InputOption } from '../../../radio';

@Component({
  selector: 'app-month-dropdown',
  templateUrl: 'month-dropdown.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MonthDropdownComponent),
      multi: true,
    },
  ],
})
export class MonthDropdownComponent extends DropdownWithInputComponent implements OnInit, OnChanges {
  @Input() month: number;
  optionLabel = '';

  constructor(
    public languageService: LanguageService,
    public formService: FormErrorService,
    @Optional() public messageGroupDirective: MessageGroupDirective,
    public injector: Injector
  ) {
    super(languageService, formService, messageGroupDirective, injector);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['month'] && changes['month'].currentValue !== changes['month'].previousValue) {
      const defaultInputOption = this.optionList.find((option) => Number(option.value) === this.month);
      this.optionLabel = defaultInputOption ? defaultInputOption.label : '';
    }
  }

  selectOptionValue(option: InputOption) {
    this.optionLabel = option.label;
    this.updateValue(option);
  }
}
