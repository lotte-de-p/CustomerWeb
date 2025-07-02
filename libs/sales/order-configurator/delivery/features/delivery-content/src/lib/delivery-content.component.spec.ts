import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { DeliveryContentComponent } from './delivery-content.component';
import { provideMockStore } from '@ngrx/store/testing';
import { defaultState } from '@sales/delivery/data-access';

describe('DeliveryContentComponent', () => {
  let component: DeliveryContentComponent;
  let fixture: ComponentFixture<DeliveryContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [provideMockStore({ initialState: defaultState })],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
