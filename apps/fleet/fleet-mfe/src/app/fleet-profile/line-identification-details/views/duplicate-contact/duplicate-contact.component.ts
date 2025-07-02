import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { last } from 'lodash-es';
import { LineIdentificationDetailsConstants } from '../../constants/line-identification-details.constants';
import { ContactDetails } from '../../../../shared/common/models/contact/contact-details.model';
import { FleetProfileFormConstants } from '../../constants/fleet-profile-form-constants';
import { TranslationService } from '../../../../shared/common/translation/translation.service';
import { NgFor, NgClass } from '@angular/common';

@Component({
  templateUrl: './duplicate-contact.component.html',
  standalone: true,
  imports: [NgFor, NgClass, TranslateModule],
})
export class DuplicateContactComponent implements OnInit {
  duplicateContactOptionList: ContactDetails[];
  selectedContactId?: string;
  toggleList: boolean[];

  constructor(
    private readonly translationService: TranslationService,
    private readonly translate: TranslateService,
    private readonly dialogRef: MatDialogRef<DuplicateContactComponent>,
    @Inject(MAT_DIALOG_DATA)
    private readonly data: {
      duplicateContactOptionList: ContactDetails[];
      newlyDuplicateContact: ContactDetails;
    }
  ) {}

  ngOnInit(): void {
    this.duplicateContactOptionList = this.data.duplicateContactOptionList;
    this.selectedContactId = last(this.duplicateContactOptionList)?.contactId;
    this.toggleList = new Array(this.duplicateContactOptionList.length);
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.selectedContactId);
  }

  selectOption(option: ContactDetails): void {
    this.selectedContactId = option.contactId;
  }

  getOptionLabel(option: ContactDetails): string {
    return this.isNewlyContactDetails(option.contactId)
      ? `${this.getNewContactText()} (${option.individual.firstName} ${option.individual.lastName})`
      : `${option.individual.firstName} ${option.individual.lastName}`;
  }

  isNewlyContactDetails(optionContactId?: string) {
    return optionContactId === FleetProfileFormConstants.DEFAULT_VALUE;
  }

  toggleIndexFor(i: number): void {
    this.toggleList[i] = !this.toggleList[i];
  }

  private getNewContactText(): string {
    const newContactDetailsTextIndicator = this.translationService.getLabel(
      LineIdentificationDetailsConstants.MESSAGE_GROUP,
      LineIdentificationDetailsConstants.CREATE_NEW_PROFILE_TRANSLATION_KEY
    );

    return this.translate.instant(newContactDetailsTextIndicator);
  }
}
