import { Component, forwardRef, Injector, Input, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LanguageService } from '@telenet/ng-lib-page';
import { AbstractDropdownComponent } from '../abstract-dropdown.component';
import { FormErrorService, MessageGroupDirective } from '../../../errors';
import { InputOption } from '../../radio';

@Component({
  selector: 'tg-form-dropdown-with-tooltip',
  templateUrl: './with-tooltip.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownWithTooltipComponent),
      multi: true,
    },
  ],
})
export class DropdownWithTooltipComponent extends AbstractDropdownComponent {
  shouldShowDropdown: boolean;
  @Input() disabled = false;
  @Input() required: boolean;

  constructor(
    public languageService: LanguageService,
    public formService: FormErrorService,
    @Optional() public messageGroupDirective: MessageGroupDirective,
    public injector: Injector
  ) {
    super(languageService, formService, messageGroupDirective, injector);
  }

  updateValue(option: InputOption): void {
    this.writeValue(option.value);
    this.onChange(option.value);
    this.toggle();
  }

  focusOut(): void {
    if (this.shouldShowDropdown) {
      if (this.control.control) {
        this.control.control.markAllAsTouched();
      }
      this.checkErrors();
      this.toggle();
    }
  }

  toggle(): void {
    this.shouldShowDropdown = !this.shouldShowDropdown;
  }

  private checkErrors(): void {
    if (this.control.control && this.control.control.errors) {
      this.error = Object.keys(this.control.control.errors)[0];
    }
  }
}
