import { ComponentFixture, TestBed } from '@angular/core/testing';
import { windowFactory } from '@telenet/ng-lib-page';
import { ManageAuthenticatorsNotificationComponent } from './manage-authenticators-notification.component';

describe('ManageAuthenticatorsNotificationComponent', () => {
  let component: ManageAuthenticatorsNotificationComponent;
  let fixture: ComponentFixture<ManageAuthenticatorsNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAuthenticatorsNotificationComponent],
      providers: [{ provide: 'Window', useValue: windowFactory() }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAuthenticatorsNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
