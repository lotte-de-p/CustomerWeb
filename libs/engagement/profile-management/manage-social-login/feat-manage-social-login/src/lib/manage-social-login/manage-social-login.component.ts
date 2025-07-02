import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerBrandEnum, LoaderModule, PathCategorisationService } from '@telenet/ng-lib-page';
import { MessagesModule } from '@telenet/ng-lib-message';
import { LoginModule, LoginService } from '@telenet/ng-lib-ocapi';
import {
  CustomerProfileFacade,
  CustomerProfileNgrxModule,
  ManageSocialLoginConstants,
} from '@profile-management/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { LetDirective } from '@ngrx/component';
import { take, tap } from 'rxjs';
import { UnlinkConfirmDialogComponent } from './unlink-confirm-dialog/unlink-confirm-dialog.component';
import { ImageSrcInterceptorDirective } from '@profile-management/util';

@Component({
  selector: 'tg-pm-manage-social-login',
  standalone: true,
  imports: [
    CommonModule,
    LoaderModule,
    MessagesModule,
    LoginModule,
    TranslateModule,
    MatDialogModule,
    LetDirective,
    CustomerProfileNgrxModule,
    ImageSrcInterceptorDirective,
  ],
  templateUrl: './manage-social-login.component.html',
})
export class ManageSocialLoginComponent implements OnInit {
  @Input() pageType: string;
  @Input() enableMask: boolean;
  @Input() enableLoader: boolean;
  @Input() socialLoginDetailsUrl: string;

  private dialogRef: MatDialogRef<UnlinkConfirmDialogComponent>;

  readonly customerProfileFacade: CustomerProfileFacade = inject(CustomerProfileFacade);
  readonly socialLogins$ = this.customerProfileFacade.socialLogins$;

  scopes = ['unlinksociallogin'];
  messageGroupName = ManageSocialLoginConstants.MESSAGE_GROUP;

  loggedIn = false;
  isBrandBase: boolean;

  constructor(
    private readonly dialog: MatDialog,
    private readonly loginService: LoginService,
    private readonly pathCategorisationService: PathCategorisationService
  ) {}

  ngOnInit(): void {
    this.getUserDetails();
    this.isBrandBase = this.pathCategorisationService.isCustomerOfBrandTypes([CustomerBrandEnum.BRAND_BASE]);
  }

  initAfterLoggedIn(): void {
    this.loggedIn = true;
  }

  private getUserDetails(): void {
    this.loginService
      .getLoginDetails()
      .pipe(
        tap(() => this.customerProfileFacade.loadSocialLogins()),
        take(1)
      )
      .subscribe();
  }

  openUnlinkConfirmationDialog(socialType: string): void {
    this.dialogRef = this.dialog.open(UnlinkConfirmDialogComponent, {
      data: {
        socialType: socialType,
      },
    });
    this.callCloseDialogSubscription();
  }

  private callCloseDialogSubscription() {
    this.dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Close') {
        this.closeDialog();
      }
    });
  }

  closeDialog(): void {
    this.dialogRef.close(true);
  }
}
