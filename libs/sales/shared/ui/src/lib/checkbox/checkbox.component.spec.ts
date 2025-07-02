import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TgTranslateTestingModule.forRoot()],
    }).compileComponents();

    jest.spyOn(console, 'log').mockImplementation(jest.fn);
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.debugElement.injector.get(NG_VALUE_ACCESSOR);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onToggle should set checked to the value of event checked', () => {
    component.registerOnChange(() => {
      return;
    });
    const event: Event = {
      target: { checked: true } as HTMLInputElement,
    } as unknown as Event;

    component.onToggle(event);

    expect(component.checked).toEqual(true);
  });

  it('writeValue should set checked', () => {
    component.writeValue(true);

    expect(component.checked).toEqual(true);
  });

  it('registerOnTouched', () => {
    component.registerOnTouched(() => true);

    expect(component.onTouched).toBeTruthy();
  });
});
