import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { GrandFatheringSocialTariffNotificationComponent } from './grand-fathering-social-tariff-notification.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { expect, jest } from '@jest/globals';

describe('GrandFatheringSocialTariffNotificationComponent', () => {
  let component: GrandFatheringSocialTariffNotificationComponent;
  let fixture: ComponentFixture<GrandFatheringSocialTariffNotificationComponent>;

  const mockDialogRef = {
    close: jest.fn(() => 'close'),
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        UrlService,
        { provide: 'Window', useValue: { location: {} } },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GrandFatheringSocialTariffNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog', () => {
    component.closeDialog();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should confirm and redirect', () => {
    component.confirm();
    expect(mockDialogRef.close).toHaveBeenCalledWith(true);
  });
});
