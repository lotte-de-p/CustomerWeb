import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { DeliverySummaryComponent } from './delivery-summary.component';
import { provideMockStore } from '@ngrx/store/testing';
import { defaultState } from '@sales/order-configurator/delivery/state';

describe('DeliverySummaryComponent', () => {
  let component: DeliverySummaryComponent;
  let fixture: ComponentFixture<DeliverySummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [provideMockStore({ initialState: defaultState })],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliverySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
