import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MobileLine, User } from '@sim-management/data-access';
import { PhoneNumberPipe } from '../phone-number/phone-number.pipe';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule, PhoneNumberPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './assign-dialog.component.html',
})
export class SimManagementAssignDialogComponent {
  assignSimCardForm: FormGroup;

  constructor(
    private readonly dialogRef: MatDialogRef<SimManagementAssignDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      mobileLine: MobileLine;
      householdUsers: User[];
      profileManagementUrl: string;
    }
  ) {
    this.assignSimCardForm = new FormGroup({
      userId: new FormControl(null),
    });
  }

  onCloseClick() {
    this.dialogRef.close();
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onAssignClick() {
    const userId = this.assignSimCardForm.get('userId')?.value;
    this.dialogRef.close(userId);
  }
}
