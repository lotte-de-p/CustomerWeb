import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UnlinkConfirmDialogComponent } from './unlink-confirm-dialog.component';
import { jest } from '@jest/globals';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CustomerProfileFacade } from '@profile-management/data-access';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OcapiService } from '@telenet/ng-lib-ocapi';

describe('UnlinkConfirmDialogComponent', () => {
  let component: UnlinkConfirmDialogComponent;
  let fixture: ComponentFixture<UnlinkConfirmDialogComponent>;
  let facade: CustomerProfileFacade;

  const mockDialogRef = {
    close: jest.fn(() => 'close'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        StoreModule.forRoot({}),
        EffectsModule.forRoot({}),
      ],
      providers: [
        MatDialog,
        OcapiService,
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: { socialType: 'itsme' } },
        { provide: 'Window', useValue: window },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UnlinkConfirmDialogComponent);
    component = fixture.componentInstance;
    facade = TestBed.inject(CustomerProfileFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('on close dialog, should close dialogRef', () => {
    component.closeDialog();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('on unlink, should call the unlink api', () => {
    jest.spyOn(facade, 'unlinkSocialLogin');
    component.unlinkSocialLogin();
    expect(facade.unlinkSocialLogin).toHaveBeenCalledWith('itsme');
  });
});
