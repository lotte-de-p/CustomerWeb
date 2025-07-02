import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    component.minValue = 0;
    component.maxValue = 5;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('decrease()', () => {
    it('should decrease value', () => {
      component.value = 2;

      component.decrease();

      expect(component.value).toEqual(1);
    });
  });

  describe('increase()', () => {
    it('should increase value', () => {
      component.value = 4;

      component.increase();

      expect(component.value).toEqual(5);
    });
  });

  describe('writeValue()', () => {
    it('should set value', () => {
      component.writeValue(2);

      expect(component.value).toEqual(2);
    });
  });
});
