import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PhoneNumberPipe } from '../phone-number/phone-number.pipe';
import { MobileLine } from '@sim-management/data-access';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule, PhoneNumberPipe],
  templateUrl: './unblock-dialog.component.html',
})
export class SimManagementUnblockDialogComponent {
  constructor(
    private readonly dialogRef: MatDialogRef<SimManagementUnblockDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      mobileLine: MobileLine;
    }
  ) {}

  onCloseClick() {
    this.dialogRef.close();
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onConfirmClick() {
    this.dialogRef.close(true);
  }
}
