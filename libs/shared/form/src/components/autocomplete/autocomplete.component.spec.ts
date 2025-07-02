import { AutocompleteComponent } from './autocomplete.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

interface ComplexModel {
  title: string;
  path: string;
}

describe('Autocomplete', () => {
  let component: AutocompleteComponent<string>;
  let componentWithComplexType: AutocompleteComponent<ComplexModel>;
  let fixture: ComponentFixture<AutocompleteComponent<string>>;
  let fixtureComplexType: ComponentFixture<AutocompleteComponent<ComplexModel>>;
  const window: Window = {} as Window;

  function triggerInput(
    value: string,
    componentFixture:
      | ComponentFixture<AutocompleteComponent<string>>
      | ComponentFixture<AutocompleteComponent<ComplexModel>> = fixture
  ) {
    const input = componentFixture.debugElement.query(By.css('input'));
    const inputNativeEl = input.nativeElement;
    inputNativeEl.value = value;
    inputNativeEl.dispatchEvent(new Event('input'));

    inputNativeEl.dispatchEvent(
      new KeyboardEvent('keyup', {
        key: value,
      })
    );
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [{ provide: 'Window', useValue: window }],
      imports: [FormsModule, CommonModule, AutocompleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AutocompleteComponent<string>);
    component = fixture.componentInstance;
    component.autocompleteItems = ['first', 'second'];
    component.searchTerm = '';
    component.name = 'custom-input-name';
    component.placeholder = 'Search';
  });

  it('should have searchterm after typing', () => {
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input'));
    const inputNativeEl = input.nativeElement;
    inputNativeEl.value = 'f';
    inputNativeEl.dispatchEvent(new Event('input'));
    expect(component.hasSearchTerm()).toBeTruthy();
  });

  describe('Filtering', () => {
    it('should have suggestions on load', () => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.hasSuggestions).toBeTruthy();
      });
    });

    it('should filter autocomplete items matching search term', () => {
      fixture.detectChanges();
      triggerInput('f');

      expect(component.filteredItems).toStrictEqual(['first']);
    });

    it('should filter autocomplete items matching search term case insensitive', () => {
      fixture.detectChanges();
      triggerInput('F');

      expect(component.filteredItems).toStrictEqual(['first']);
    });

    it('should update the highlighted item', () => {
      fixture.detectChanges();
      triggerInput('F');
      expect(component.highlightedItem).toBe('first');
    });

    it('should show all items when autocomplete field is made empty again', () => {
      fixture.detectChanges();
      const input = fixture.debugElement.query(By.css('input'));
      const inputNativeEl = input.nativeElement;

      triggerInput('F');
      expect(component.filteredItems).toStrictEqual(['first']);
      inputNativeEl.value = '';
      inputNativeEl.dispatchEvent(new Event('input'));

      inputNativeEl.dispatchEvent(
        new KeyboardEvent('keyup', {
          key: 'Backspace',
        })
      );
      expect(component.filteredItems).toStrictEqual(['first', 'second']);
    });

    describe('Filtering complex types', () => {
      const frenchComplexModel = { title: 'French', path: '/content/www-telenet-be/fr' };

      beforeEach(() => {
        fixtureComplexType = TestBed.createComponent(AutocompleteComponent<ComplexModel>);
        componentWithComplexType = fixtureComplexType.componentInstance;
        componentWithComplexType.autocompleteItems = [
          { title: 'Dutch', path: '/content/www-telenet-be/nl' },
          { title: 'French', path: '/content/www-telenet-be/fr' },
        ];
        componentWithComplexType.createLabel = (item: ComplexModel) => item.title;
        componentWithComplexType.searchTerm = '';
        componentWithComplexType.name = 'custom-input-name';
        componentWithComplexType.placeholder = 'Search';
      });

      it('should filter autocomplete items matching search term', () => {
        fixtureComplexType.detectChanges();
        const input = fixtureComplexType.debugElement.query(By.css('input'));
        const inputNativeEl = input.nativeElement;
        inputNativeEl.value = 'f';
        inputNativeEl.dispatchEvent(new Event('input'));

        inputNativeEl.dispatchEvent(
          new KeyboardEvent('keyup', {
            key: 'f',
          })
        );
        expect(componentWithComplexType.filteredItems).toStrictEqual([frenchComplexModel]);
      });

      it('should filter autocomplete items matching search term case insensitive', () => {
        fixtureComplexType.detectChanges();
        triggerInput('F', fixtureComplexType);
        expect(componentWithComplexType.filteredItems).toStrictEqual([frenchComplexModel]);
      });

      it('should update the highlighted item', () => {
        fixtureComplexType.detectChanges();
        triggerInput('F', fixtureComplexType);
        expect(componentWithComplexType.highlightedItem).toStrictEqual(frenchComplexModel);
      });

      it('should empty the highlighted item when there are no results', () => {
        fixtureComplexType.detectChanges();
        triggerInput('Q', fixtureComplexType);
        expect(componentWithComplexType.highlightedItem).toBe(null);
      });
    });
  });

  describe('Blur', () => {
    it('should not show suggestions anymore on blur', () => {
      fixture.detectChanges();
      const input = fixture.debugElement.query(By.css('input'));
      const inputNativeEl = input.nativeElement;
      triggerInput('F');
      expect(component.showSuggestions).toBeTruthy();
      inputNativeEl.dispatchEvent(new Event('blur'));
      expect(component.showSuggestions).toBeFalsy();
    });

    it('should emit selectionChange event with null', () => {
      fixture.detectChanges();
      jest.spyOn(component.selectionChange, 'emit');
      jest.spyOn(component.inputTextChange, 'emit');
      const input = fixture.debugElement.query(By.css('input'));
      const inputNativeEl = input.nativeElement;
      triggerInput('F');
      expect(component.showSuggestions).toBeTruthy();
      inputNativeEl.dispatchEvent(new Event('blur'));
      expect(component.selectionChange.emit).toHaveBeenCalledWith();
      expect(component.inputTextChange.emit).toHaveBeenCalledTimes(1);
    });
  });

  describe('Focus', () => {
    it('should show suggestions on focus', () => {
      component.showListOnFocus = true;
      fixture.detectChanges();
      const input = fixture.debugElement.query(By.css('input'));
      const inputNativeEl = input.nativeElement;
      triggerInput('F');
      inputNativeEl.dispatchEvent(new Event('focus'));
      expect(component.showSuggestions).toBeTruthy();
    });
  });

  describe('Selecting value', () => {
    it('should select value on Enter key', () => {
      fixture.detectChanges();
      jest.spyOn(component.selectionChange, 'emit');
      const input = fixture.debugElement.query(By.css('input'));
      const inputNativeEl = input.nativeElement;
      triggerInput('F');

      inputNativeEl.dispatchEvent(
        new KeyboardEvent('keyup', {
          key: 'Enter',
        })
      );

      expect(component.showSuggestions).toBeFalsy();
      expect(component.selectedItem).toBe('first');
      expect(component.selectionChange.emit).toHaveBeenCalledWith('first');
    });

    it('should select value on click', () => {
      fixture.detectChanges();
      jest.spyOn(component.selectionChange, 'emit');
      const input = fixture.debugElement.query(By.css('input'));
      const inputNativeEl = input.nativeElement;
      inputNativeEl.value = 'F';
      inputNativeEl.dispatchEvent(new Event('input'));

      inputNativeEl.dispatchEvent(
        new KeyboardEvent('keyup', {
          key: 'F',
        })
      );

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const suggestion = fixture.debugElement.query(By.css('.dropdown-suggest__selector-menu--active'));
        suggestion.nativeElement.dispatchEvent(new Event('mousedown'));

        fixture.detectChanges();

        expect(component.showSuggestions).toBeFalsy();
        expect(component.selectedItem).toBe('first');
        expect(component.selectionChange.emit).toHaveBeenCalledWith('first');
      });
    });
  });

  describe('Keyboard navigation', () => {
    it('should highlight next item when pressing ArrowDown', () => {
      fixture.detectChanges();
      component.highlightedItem = 'first';
      component.searchTerm = 's';
      component.showSuggestions = true;
      component.filteredItems = component.autocompleteItems;

      const input = fixture.debugElement.query(By.css('input'));
      const inputNativeEl = input.nativeElement;

      inputNativeEl.dispatchEvent(
        new KeyboardEvent('keyup', {
          key: 'ArrowDown',
        })
      );

      expect(component.highlightedItem).toBe('second');
    });

    it('should highlight last item when pressing ArrowDown when highlighted item was already last item', () => {
      fixture.detectChanges();
      component.highlightedItem = 'second';
      component.searchTerm = 's';
      component.filteredItems = component.autocompleteItems;

      const input = fixture.debugElement.query(By.css('input'));
      const inputNativeEl = input.nativeElement;

      expect(component.highlightedItem).toBe('second');

      inputNativeEl.dispatchEvent(
        new KeyboardEvent('keyup', {
          key: 'ArrowDown',
        })
      );

      expect(component.highlightedItem).toBe('second');
    });

    it('set scrollTo when pressing ArrowDown for more than 5 times', () => {
      fixture.detectChanges();
      component.highlightedItem = 'first';
      component.searchTerm = 's';
      component.autocompleteItems.push('third', 'fourth', 'fifth', 'sixth', 'seventh');
      component.showSuggestions = true;
      component.filteredItems = component.autocompleteItems;

      const input = fixture.debugElement.query(By.css('input'));
      const inputNativeEl = input.nativeElement;

      for (let i = 0; i < 6; i++) {
        inputNativeEl.dispatchEvent(
          new KeyboardEvent('keyup', {
            key: 'ArrowDown',
          })
        );
      }

      expect(component.highlightedItem).toBe('seventh');
      expect(component.scrollTo).toBe(180);
    });

    it('should highlight previous item when pressing ArrowUp', () => {
      fixture.detectChanges();
      component.highlightedItem = 'second';
      component.searchTerm = 's';
      component.showSuggestions = true;
      component.filteredItems = component.autocompleteItems;

      const input = fixture.debugElement.query(By.css('input'));
      const inputNativeEl = input.nativeElement;

      expect(component.highlightedItem).toBe('second');

      inputNativeEl.dispatchEvent(
        new KeyboardEvent('keyup', {
          key: 'ArrowUp',
        })
      );

      expect(component.highlightedItem).toBe('first');
    });

    it('should highlight last item when pressing ArrowDown when highlighted item was already last item', () => {
      fixture.detectChanges();
      component.highlightedItem = 'second';
      component.searchTerm = 's';
      component.showSuggestions = true;
      component.filteredItems = component.autocompleteItems;

      const input = fixture.debugElement.query(By.css('input'));
      const inputNativeEl = input.nativeElement;

      expect(component.highlightedItem).toBe('second');

      inputNativeEl.dispatchEvent(
        new KeyboardEvent('keyup', {
          key: 'ArrowUp',
        })
      );

      expect(component.highlightedItem).toBe('first');
    });
  });
});
