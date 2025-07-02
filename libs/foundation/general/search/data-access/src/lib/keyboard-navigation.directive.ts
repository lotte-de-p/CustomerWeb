import { AfterViewChecked, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { KeyboardNavigationService } from './services/keyboard-navigation.service';
import { Suggestions } from './entities/suggestions';

@Directive({
  selector: '[tgFoundationGeneralSearchKeyboardNavigationDirective]',
  standalone: true,
})
export class KeyboardNavigationDirective implements AfterViewChecked {
  private wrapper: HTMLElement;
  private focusedList: HTMLElement;
  private focusedElement: HTMLElement;
  private downKeyPressCount = 0; // Add this counter to your component
  private readonly ARROW_UP = 'ArrowUp';
  private readonly ARROW_DOWN = 'ArrowDown';
  private readonly TAB = 'Tab';

  @Input() suggestions!: Suggestions;
  @Input() suggestionsFieldName!: string;

  constructor(
    private readonly el: ElementRef,
    private readonly keyboardNavigationService: KeyboardNavigationService
  ) {}

  ngAfterViewChecked() {
    this.wrapper = this.el.nativeElement;
    this.focusedList = this.keyboardNavigationService.getFocusedList() ?? (this.wrapper.firstChild as HTMLElement);
    this.focusedElement =
      this.keyboardNavigationService.getFocusedElement() ?? (this.focusedList.querySelector('li') as HTMLElement);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.handleTab(event);
    this.handleArrowKeys(event);
  }

  private handleTab(event: KeyboardEvent) {
    if (event.key === this.TAB) {
      event.preventDefault();

      const currentIndex = Array.from(this.wrapper.children).indexOf(this.focusedList);
      const nextIndex = (currentIndex + 1) % this.wrapper.children.length;
      this.keyboardNavigationService.setFocusedList(this.wrapper.children[nextIndex] as HTMLElement);
      this.keyboardNavigationService.setFocusedElement(this.wrapper.children[nextIndex].querySelector('li'));
    }
  }

  private handleArrowKeys(event: KeyboardEvent) {
    if (event.key === this.ARROW_UP || event.key === this.ARROW_DOWN) {
      event.preventDefault();

      const listItems = this.focusedList?.querySelectorAll('li');
      const currentIndex = Array.from(listItems).indexOf(this.focusedElement as HTMLLIElement);
      let nextIndex = currentIndex;

      if (event.key === this.ARROW_UP) {
        nextIndex = (currentIndex - 1 + listItems.length) % listItems.length;
      } else if (event.key === this.ARROW_DOWN) {
        if (this.downKeyPressCount >= 1) {
          nextIndex = (currentIndex + 1) % listItems.length;
        } else {
          this.downKeyPressCount++;
        }
      }

      const nextElement = listItems[nextIndex] as HTMLElement;

      if (nextElement) {
        this.keyboardNavigationService.setFocusedElement(nextElement);
      }
    }
  }
}
