import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '@telenet/ng-lib-page';
import { BrowserModule } from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NewNoAvailableAppointmentDateComponent } from './new-no-available-appointment-date.component';

describe('NewNoAvailableAppointmentDateComponent', () => {
  let component: NewNoAvailableAppointmentDateComponent;
  let fixture: ComponentFixture<NewNoAvailableAppointmentDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewNoAvailableAppointmentDateComponent],
      imports: [TranslateModule.forRoot()],
      providers: [
        TranslateService,
        LanguageService,
        BrowserModule,
        { provide: 'Window', useValue: {} },
        { provide: ChangeDetectorRef, useValue: {} },
      ],
    });
    fixture = TestBed.createComponent(NewNoAvailableAppointmentDateComponent);
    component = fixture.componentInstance;
    component.messageGroup = 'messageGroup';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should show the messageGroup in the labels', () => {
    const nativeElement = fixture.nativeElement;
    const querySelector = nativeElement.querySelector('p');
    expect(querySelector.textContent).toContain('messageGroup');
  });

  describe('loadSlots', () => {
    it('should call loadMore', function () {
      jest.spyOn(component.loadMoreSlots, 'emit');
      component.loadSlots();
      expect(component.loadMoreSlots.emit).toHaveBeenCalled();
    });
  });
});
