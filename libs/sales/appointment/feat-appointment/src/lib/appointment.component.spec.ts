import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppointmentComponent } from './appointment.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockWindow } from '@stencil/core/mock-doc';
import { provideMockStore } from '@ngrx/store/testing';

describe('FeatAppointmentComponent', () => {
  let component: AppointmentComponent;
  let fixture: ComponentFixture<AppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentComponent, TranslateModule.forRoot(), HttpClientTestingModule],
      providers: [{ provide: 'Window', useValue: MockWindow }, provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(AppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
