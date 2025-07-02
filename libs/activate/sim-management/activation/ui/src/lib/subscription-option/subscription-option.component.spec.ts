import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SimManagementSubscriptionOptionComponent } from './subscription-option.component';

describe('SubscriptionOptionComponent', () => {
  let component: SimManagementSubscriptionOptionComponent;
  let fixture: ComponentFixture<SimManagementSubscriptionOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SimManagementSubscriptionOptionComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({
      accountType: new FormControl(),
      iccid: new FormControl(),
      accountNumber: new FormControl(),
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
