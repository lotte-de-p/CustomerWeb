import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngenicoFormComponent } from './ingenico-form.component';
import { IngenicoRequestForm } from '@sales/shared/data-access';

describe('SalesSharedFeatIngenicoFormComponent', () => {
  let component: IngenicoFormComponent;
  let fixture: ComponentFixture<IngenicoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngenicoFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IngenicoFormComponent);
    component = fixture.componentInstance;
    jest.spyOn(component.paymentInitiated, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('sendRequest', () => {
    it('should submit the child form', () => {
      const form: IngenicoRequestForm = {} as IngenicoRequestForm;

      jest.spyOn(component.ingenicoForm?.nativeElement, 'click');

      component.sendRequest(form);

      expect(component.ingenicoForm?.nativeElement.click).toHaveBeenCalled();
      expect(component.paymentInitiated.emit).toHaveBeenCalled();
    });
  });
});
