import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputOption, LabelUtil, TgFormsModule } from '@telenet/ng-lib-form';
import { PhoneNumberTransformService } from '@telenet/ng-lib-layout';
import { SalutationInputOptionService } from '../../services/salutation-input-option.service';
import { LanguageInputOptionService } from '../../services/language-input-option.service';
import { CommonConstants } from '../../../../shared/common/constants/common.constants';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'tg-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styles: [],
  standalone: true,
  imports: [TgFormsModule, ReactiveFormsModule, NgClass, NgIf, TranslateModule],
})
export class UserProfileFormComponent implements OnInit {
  salutationOptionList: InputOption[];
  languages: InputOption[];
  @Input() messageGroupName: string;
  @Input() showIdentificationDetailsBtn: boolean;
  @Input() isContactDetailsEditable: boolean;
  @Input() day: number;
  @Input() month: number;
  @Input() year: number;
  @Input() form: FormGroup;
  @Input() fullScreen: boolean;

  constructor(
    private readonly salutationInputOptionService: SalutationInputOptionService,
    private readonly phoneNumberTransformService: PhoneNumberTransformService,
    private readonly languageInputOptionService: LanguageInputOptionService
  ) {}

  ngOnInit(): void {
    this.salutationOptionList = this.salutationInputOptionService.getSalutationOptions();
    this.languages = this.languageInputOptionService.getLanguageOptions();
  }

  get isContactDetailsNotEditable(): boolean {
    return !this.isContactDetailsEditable;
  }

  getLabel(key: string): string {
    return LabelUtil.getLabelKeyWithTypeLabel(this.messageGroupName + '.' + key);
  }

  autoFormatPhoneNumber(): void {
    const phoneNumber = this.form.get(['phoneNumber', 'phoneNumberValue']);

    if (phoneNumber?.value && !CommonConstants.PHONE_NUMBER_REGEX.test(phoneNumber.value)) {
      const phoneNumberValue = phoneNumber.value.replace(CommonConstants.PHONE_NUMBER_ONLY_NUMBERS, '');
      phoneNumber.setValue(this.phoneNumberTransformService.autoFormatPhoneNumber(phoneNumberValue));
    }
  }
}
