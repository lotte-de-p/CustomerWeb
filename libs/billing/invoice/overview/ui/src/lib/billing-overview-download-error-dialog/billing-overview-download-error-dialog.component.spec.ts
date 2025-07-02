import { BillingOverviewDownloadErrorDialogComponent } from './billing-overview-download-error-dialog.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MockProvider } from 'ng-mocks';
import { MatDialogRef } from '@angular/material/dialog';

describe('BillingOverviewDownloadErrorDialogComponent', () => {
  let component: BillingOverviewDownloadErrorDialogComponent;
  let fixture: ComponentFixture<BillingOverviewDownloadErrorDialogComponent>;
  let dialogRef: MatDialogRef<BillingOverviewDownloadErrorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingOverviewDownloadErrorDialogComponent, TranslateModule.forRoot()],
      providers: [
        {
          provide: 'Window',
          useValue: {
            document: {
              documentElement: {
                lang: 'en',
              },
            },
          },
        },
        MockProvider(MatDialogRef),
      ],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingOverviewDownloadErrorDialogComponent);
    component = fixture.componentInstance;
    dialogRef = TestBed.inject(MatDialogRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the dialog', () => {
    jest.spyOn(dialogRef, 'close');
    component.closeDialog();
    expect(dialogRef.close).toHaveBeenCalled();
  });
});
