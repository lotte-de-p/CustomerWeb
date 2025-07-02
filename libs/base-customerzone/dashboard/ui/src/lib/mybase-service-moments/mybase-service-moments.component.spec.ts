import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyBaseServiceMomentsComponent } from './mybase-service-moments.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';

describe('MybaseDashboardEventComponent', () => {
  let component: MyBaseServiceMomentsComponent;
  let fixture: ComponentFixture<MyBaseServiceMomentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [TranslateService, { provide: 'Window', useValue: { location: {} } }, DatePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(MyBaseServiceMomentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
