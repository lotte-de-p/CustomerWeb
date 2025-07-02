import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'tg-autocomplete',
  templateUrl: './autocomplete.component.html',
  imports: [CommonModule, FormsModule],
})
export class AutocompleteComponent<T> implements OnInit {
  @Input() searchTerm: string;
  @Input() autocompleteItems: T[];
  @Input() createLabel: (item: T) => string;
  @Input() placeholder = '';
  @Input() maxResults = 5;
  @Input() name = 'autocomplete';
  @Input() showListOnFocus: boolean;
  @Input() setErrorState = false;

  @Output() selectionChange = new EventEmitter<T>();
  @Output() inputTextChange = new EventEmitter<string>();

  showSuggestions = false;
  highlightedItem: T | null;
  filteredItems: T[];
  selectedItem: T | null;
  scrollTo = 0;
  highlightedItemHeight = 44;
  listItemHeight = 36;

  ngOnInit(): void {
    if (!this.createLabel) {
      this.createLabel = this.fallbackCreateLabel;
    }
  }

  private fallbackCreateLabel(item: T) {
    if (typeof item !== 'string') {
      throw new TypeError(
        `Unable to determine how to retrieve the label from type. The 'createLabel' property should be passed.`
      );
    }
    return item;
  }

  handleKeyEvent(key: string) {
    switch (key) {
      case 'Enter':
        this.selectItem(this.highlightedItem);
        break;
      case 'Escape':
        this.onBlur();
        break;
      case 'ArrowUp':
        this.handleArrowUp();
        break;
      case 'ArrowDown':
        this.handleArrowDown();
        break;
      default:
        this.updateModelWithSearchTerm();
    }
  }

  private updateModelWithSearchTerm(): void {
    this.showSuggestions = false;
    this.filteredItems = this.updateFilteredItems();
    this.showSuggestions = this.showListOnFocus || this.hasSearchTerm();
    this.setHighlightedItem(this.filteredItems);
  }

  private getHighlightedItemIndex(): number {
    return this.filteredItems.findIndex((item) => item === this.highlightedItem);
  }

  private handleArrowUp() {
    if (this.showListBox()) {
      const indexOfCurrentHighlightedItem = this.getHighlightedItemIndex();
      this.scrollTo = indexOfCurrentHighlightedItem * this.listItemHeight - this.highlightedItemHeight;
      if (indexOfCurrentHighlightedItem >= 1) {
        this.highlightedItem = this.filteredItems[indexOfCurrentHighlightedItem - 1];
      }
    }
  }

  private handleArrowDown() {
    if (this.showListBox()) {
      const indexOfCurrentHighlightedItem = this.getHighlightedItemIndex();
      if (indexOfCurrentHighlightedItem > 4) {
        this.scrollTo = indexOfCurrentHighlightedItem * this.listItemHeight;
      }
      if (indexOfCurrentHighlightedItem + 1 < this.filteredItems.length) {
        this.highlightedItem = this.filteredItems[indexOfCurrentHighlightedItem + 1];
      }
    }
  }

  private setSearchTerm(keyword: string): void {
    this.searchTerm = keyword;
  }

  showListBox(): boolean {
    return this.showSuggestions && (this.hasSearchTerm() || this.showListOnFocus) && this.hasSuggestions();
  }

  getLabel(item: T): string {
    return this.createLabel(item);
  }

  selectItem(item: T | null): void {
    if (item) {
      this.setSearchTerm(this.getLabel(item));
    }
    this.selectedItem = item;
    this.showSuggestions = false;
    if (this.selectedItem) {
      this.selectionChange.emit(this.selectedItem);
    } else {
      this.selectionChange.emit();
    }
  }

  private setHighlightedItem(filteredItems: T[]) {
    if (filteredItems.length === 0) {
      this.highlightedItem = null;
    } else {
      this.highlightedItem = filteredItems[0];
    }
  }

  onBlur(event?: Event) {
    if (!this.selectedItem) {
      this.selectItem(null);
    }
    const element = event?.currentTarget as HTMLInputElement;
    this.inputTextChange.emit(element?.value);
    this.showSuggestions = false;
  }

  onFocus() {
    if (this.showListOnFocus) {
      this.updateModelWithSearchTerm();
    }
  }

  hasSearchTerm(): boolean {
    return !!this.searchTerm && this.searchTerm.length > 0;
  }

  hasSuggestions(): boolean {
    return !!this.filteredItems.length;
  }

  updateFilteredItems() {
    let filteredItems = this.autocompleteItems;
    if (this.hasSearchTerm()) {
      filteredItems = filteredItems
        .filter((filteredItem) => this.getLabel(filteredItem))
        .filter((filteredItem) => this.getLabel(filteredItem).toLowerCase().startsWith(this.searchTerm.toLowerCase()));
      // Modified 'contains' to 'startWith'. this can be handled using a configuration property in future if necessary.
    }
    return filteredItems.slice(0, this.maxResults);
  }

  getItemId(highlightedItem: T) {
    return window.btoa(JSON.stringify(highlightedItem));
  }

  getActiveItemId(): string {
    if (this.highlightedItem) {
      return this.getItemId(this.highlightedItem);
    }
    return '';
  }
}
