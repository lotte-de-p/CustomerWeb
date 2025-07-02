import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceComponent } from './device.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('DeviceComponent', () => {
  let component: DeviceComponent;
  let fixture: ComponentFixture<DeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EffectsModule.forRoot([]),
        StoreModule.forRoot({}),
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
