import { HardwareDiscountDownloadErrorDialogComponent } from './hardware-discount-download-error-dialog.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MockProvider } from 'ng-mocks';
import { MatDialogRef } from '@angular/material/dialog';

describe('HardwareDiscountDownloadErrorDialogComponent', () => {
  let component: HardwareDiscountDownloadErrorDialogComponent;
  let fixture: ComponentFixture<HardwareDiscountDownloadErrorDialogComponent>;
  let dialogRef: MatDialogRef<HardwareDiscountDownloadErrorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardwareDiscountDownloadErrorDialogComponent, TranslateModule.forRoot()],
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

    fixture = TestBed.createComponent(HardwareDiscountDownloadErrorDialogComponent);
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
