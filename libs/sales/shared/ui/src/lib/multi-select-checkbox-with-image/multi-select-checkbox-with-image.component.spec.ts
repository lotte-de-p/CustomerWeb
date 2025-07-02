import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxWithImage, MultiSelectCheckboxWithImageComponent } from './multi-select-checkbox-with-image.component';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

describe('MultiSelectCheckboxWithImageComponent', () => {
  let component: MultiSelectCheckboxWithImageComponent;
  let fixture: ComponentFixture<MultiSelectCheckboxWithImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TgTranslateTestingModule.forRoot()],
    }).compileComponents();

    jest.spyOn(console, 'log').mockImplementation(jest.fn);
    fixture = TestBed.createComponent(MultiSelectCheckboxWithImageComponent);
    component = fixture.componentInstance;
    component.registerOnChange(() => {
      // register no-op to ensure not undefined
    });
    component.checkboxes = [
      {
        key: 'key1',
        label: 'label1',
        imgSrc: '',
      },
      {
        key: 'key2',
        label: 'label2',
        imgSrc: '',
      },
      {
        key: 'key3',
        label: 'label3',
        imgSrc: '',
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

      expect(component.selectedCheckboxes).toEqual(selectedChips);
    });

    it('should interpret null as empty array', () => {
      const selectedChips = null;

      component.writeValue(selectedChips);

      expect(component.selectedCheckboxes).toEqual([]);
    });
  });

  describe('toggleCheckbox', () => {
    it('should add checkbox to selectedCheckboxes', () => {
      const checkbox: CheckboxWithImage = {
        key: 'key1',
        label: 'label1',
        imgSrc: '',
      };
      component.selectedCheckboxes = [];

      component.toggleCheckbox(checkbox);

      expect(component.selectedCheckboxes).toEqual([checkbox.key]);
    });

    it('should remove checkbox from selectedCheckboxes', () => {
      const checkbox: CheckboxWithImage = {
        key: 'key1',
        label: 'label1',
        imgSrc: '',
      };
      component.selectedCheckboxes = [checkbox.key];

      component.toggleCheckbox(checkbox);

      expect(component.selectedCheckboxes).toEqual([]);
    });
  });

  it('isChecked should return true when checkbox is included in selectedCheckboxes', () => {
    const checkbox: CheckboxWithImage = {
      key: 'key1',
      label: 'label1',
      imgSrc: '',
    };
    component.selectedCheckboxes = [checkbox.key];

    const result: boolean = component.isChecked(checkbox);

    expect(result).toBe(true);
  });
});
