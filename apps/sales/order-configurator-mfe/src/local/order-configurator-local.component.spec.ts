import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { CookieService } from 'ngx-cookie-service';
import { OrderConfiguratorLocalComponent } from './order-configurator-local.component';

describe('OrderConfiguratorLocalComponent', () => {
  let component: OrderConfiguratorLocalComponent;
  let fixture: ComponentFixture<OrderConfiguratorLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [TranslateModule.forRoot(), StoreModule.forRoot(), EffectsModule.forRoot(), HttpClientModule],
      providers: [CookieService, { provide: 'Window', useValue: Window }],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderConfiguratorLocalComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
