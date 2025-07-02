import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RecipientDetailsComponent } from './recipient-details.component';
import { provideMockStore } from '@ngrx/store/testing';
import { defaultState } from '@sales/order-configurator/delivery/state';

describe('RecipientDetailsComponent', () => {
  let component: RecipientDetailsComponent;
  let fixture: ComponentFixture<RecipientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [provideMockStore({ initialState: defaultState })],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('openRecipientDetailsForm', () => {
    it('should emit isFormVisible event when openRecipientDetailsForm is called', () => {
      const emitSpy = jest.spyOn(component.isFormVisible, 'emit');
      component.openRecipientDetailsForm();
      expect(emitSpy).toHaveBeenCalled();
    });

    it('should not emit isFormVisible event if openRecipientDetailsForm is not called', () => {
      const emitSpy = jest.spyOn(component.isFormVisible, 'emit');
      expect(emitSpy).not.toHaveBeenCalled();
    });
  });
});
