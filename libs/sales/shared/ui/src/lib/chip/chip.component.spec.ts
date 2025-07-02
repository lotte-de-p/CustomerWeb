import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipComponent } from './chip.component';
import { TranslateModule } from '@ngx-translate/core';

describe('ChipComponent', () => {
  let component: ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.iconClass).toEqual('');
    expect(component.label).toEqual('');
    expect(component.checked).toBe(false);
  });

  it('writeValue should set checked', () => {
    component.writeValue(true);

    expect(component.checked).toBe(true);
  });

  it('onToggle should set checked equal to the value of event checked ', () => {
    const event: Event = {
      target: {
        checked: true,
      },
    } as unknown as Event;
    component.registerOnChange(() => true);

    component.onToggle(event);

    expect(component.checked).toBe(true);
  });
});
