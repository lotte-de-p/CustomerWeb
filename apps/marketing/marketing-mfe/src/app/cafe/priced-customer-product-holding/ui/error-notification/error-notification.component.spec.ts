import { ErrorNotificationComponent } from './error-notification.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { NotificationTypeEnum } from '../../model/notification.model';

describe('ErrorNotificationComponent', () => {
  let component: ErrorNotificationComponent;
  let fixture: ComponentFixture<ErrorNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getClass', () => {
    it('should return correct class for info', function () {
      component.type = NotificationTypeEnum.INFO;

      expect(component.getClass()).toEqual('notification--info');
    });
    it('should return correct class for warning', function () {
      component.type = NotificationTypeEnum.WARNING;

      expect(component.getClass()).toEqual('notification--warning');
    });
    it('should return correct class for error', function () {
      component.type = NotificationTypeEnum.ERROR;

      expect(component.getClass()).toEqual('notification--errorfield');
    });
  });

  describe('getIconClass', () => {
    it('should return correct class for info', function () {
      component.type = NotificationTypeEnum.INFO;

      expect(component.getIconClass()).toEqual('icon-information-shape info');
    });
    it('should return correct class for warning', function () {
      component.type = NotificationTypeEnum.WARNING;

      expect(component.getIconClass()).toEqual('icon-alert-shape warning');
    });
    it('should return correct class for error', function () {
      component.type = NotificationTypeEnum.ERROR;

      expect(component.getIconClass()).toEqual('icon-error-shape errorfield');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
