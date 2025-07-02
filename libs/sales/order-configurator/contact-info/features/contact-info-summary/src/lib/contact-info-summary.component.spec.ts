import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { ContactInfoSummaryComponent } from './contact-info-summary.component';
import { defaultState } from '@sales/order-configurator/contact-info/state';

describe('ContactInfoSummaryComponent', () => {
  let component: ContactInfoSummaryComponent;
  let fixture: ComponentFixture<ContactInfoSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [provideMockStore({ initialState: defaultState })],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactInfoSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
