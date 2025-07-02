import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThankYouComponent } from './thank-you.component';
import { TranslateModule } from '@ngx-translate/core';
import { EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ThankYouComponent', () => {
  let component: ThankYouComponent;
  let fixture: ComponentFixture<ThankYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [EventEmitter, { provide: 'Window', useValue: {} }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('close overlay', () => {
    it('should close the overlay', () => {
      const eventEmitterSpy = jest.spyOn(component.closeEvent, 'emit');
      component.onClose();
      expect(eventEmitterSpy).toHaveBeenCalled();
    });
  });
});
