import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MessagesModule } from '@telenet/ng-lib-message';
import { CommonModule } from '@angular/common';
import { LoaderModule } from '@telenet/ng-lib-page';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { TranslateModule } from '@ngx-translate/core';
import {
  CustomerProfileFacade,
  UnlinkSocialLoginInterface,
  ManageSocialLoginConstants,
} from '@profile-management/data-access';

@Component({
  selector: 'tg-pm-unlink-confirm-dialog',
  standalone: true,
  imports: [CommonModule, LoaderModule, MessagesModule, LoginModule, TranslateModule],
  templateUrl: './unlink-confirm-dialog.component.html',
})
export class UnlinkConfirmDialogComponent {
  readonly customerProfileFacade: CustomerProfileFacade = inject(CustomerProfileFacade);

  messageGroupName = ManageSocialLoginConstants.MESSAGE_GROUP;

  constructor(
    public dialogRef: MatDialogRef<UnlinkConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      socialType: string;
    },
    public dialog: MatDialog
  ) {}

  closeDialog(): void {
    this.dialogRef.close(true);
  }

  unlinkSocialLogin(): void {
    const payLoad: UnlinkSocialLoginInterface = {
      socialLoginType: this.data.socialType,
    };
    this.closeDialog();
    this.customerProfileFacade.unlinkSocialLogin(payLoad.socialLoginType);
  }
}
