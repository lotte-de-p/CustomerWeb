import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { RecipientAddressComponent } from './recipient-address.component';
import { defaultState } from '@sales/order-configurator/delivery/state';

describe('RecipientAddressComponent', () => {
  let component: RecipientAddressComponent;
  let fixture: ComponentFixture<RecipientAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [provideMockStore({ initialState: defaultState })],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipientAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
