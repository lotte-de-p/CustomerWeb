import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chip, MultipleSelectChipComponent } from './multiple-select-chip.component';
import { TranslateModule } from '@ngx-translate/core';

describe('MultipleSelectChipComponent', () => {
  let component: MultipleSelectChipComponent;
  let fixture: ComponentFixture<MultipleSelectChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleSelectChipComponent);
    component = fixture.componentInstance;
    component.registerOnChange(() => {
      // register no-op to ensure not undefined
    });
    component.chips = [
      {
        key: 'key1',
        icon: 'icon1',
        label: 'label1',
      },
      {
        key: 'key2',
        icon: 'icon2',
        label: 'label2',
      },
      {
        key: 'key3',
        icon: 'icon3',
        label: 'label3',
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('writeValue', () => {
    it('should set selectedChips', () => {
      const selectedChips: string[] = ['key1'];

      component.writeValue(selectedChips);

      expect(component.selectedChips).toEqual(selectedChips);
    });

    it('should interpret null as empty array', () => {
      const selectedChips = null;

      component.writeValue(selectedChips);

      expect(component.selectedChips).toEqual([]);
    });
  });

  describe('selectAll', () => {
    it('should select all chips', () => {
      const event: Event = {
        target: {
          checked: true,
        },
      } as unknown as Event;
      const expected: string[] = ['key1', 'key2', 'key3'];

      component.selectAll(event);

      expect(component.selectedChips).toEqual(expected);
    });

    it('should deselect all chips', () => {
      const event: Event = {
        target: {
          checked: false,
        },
      } as unknown as Event;

      component.selectAll(event);

      expect(component.selectedChips).toEqual([]);
    });
  });

  describe('toggleChip', () => {
    it('should add chip to selectedChips', () => {
      const chip: Chip = {
        key: 'key1',
        icon: '',
        label: '',
      };
      component.selectedChips = [];

      component.toggleChip(chip);

      expect(component.selectedChips).toEqual([chip.key]);
    });

    it('should remove chip from selectedChips', () => {
      const chip: Chip = {
        key: 'key1',
        icon: '',
        label: '',
      };
      component.selectedChips = [chip.key];

      component.toggleChip(chip);

      expect(component.selectedChips).toEqual([]);
    });
  });

  it('isChecked should return true when chip is included in selectedChips', () => {
    const chip: Chip = {
      key: 'key1',
      icon: '',
      label: '',
    };
    component.selectedChips = [chip.key];

    const result: boolean = component.isChecked(chip);

    expect(result).toBe(true);
  });
});
