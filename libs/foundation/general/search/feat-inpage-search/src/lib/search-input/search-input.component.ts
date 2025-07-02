import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessibilitySpanComponent, ButtonComponent } from '@general/ui-search';
import { TranslateModule } from '@ngx-translate/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { KeyboardNavigationDirective, SearchFacadeService } from '@general/data-access-search';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';
import { SuggestionsComponent } from '../suggestions/suggestions.component';
import { ClickOutsideDirective } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-foundation-general-search-inpage-search-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccessibilitySpanComponent,
    TranslateModule,
    ButtonComponent,
    SuggestionsComponent,
    ClickOutsideDirective,
    KeyboardNavigationDirective,
  ],
  templateUrl: 'search-input.component.html',
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Input() query: string | null = '';
  @Input() suggestionsFieldName: string;
  @Input() includeHardwareResults: boolean;
  @ViewChild('inputField') inputField: ElementRef;

  readonly #searchFacadeService = inject(SearchFacadeService);
  readonly #cdr = inject(ChangeDetectorRef);
  readonly #destroy$ = new Subject<boolean>();

  suggestions$ = this.#searchFacadeService.inPageSuggestions$;

  queryFormControl = new FormControl('');
  inPageFormGroup = new FormGroup({ query: this.queryFormControl });

  ngOnDestroy(): void {
    this.#destroy$.next(true);
    this.#destroy$.complete();
  }

  ngOnInit(): void {
    if (this.query) {
      this.queryFormControl.setValue(this.query);
      this.#cdr.detectChanges();
    }
    this.queryFormControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(250),
        tap((value) => this.onValueChanged(value ?? '', this.includeHardwareResults)),
        takeUntil(this.#destroy$)
      )
      .subscribe();
  }

  @HostListener('window:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.clear();
    }
  }

  onValueChanged(query: string, includeHardwareResults: boolean) {
    if (query.length > 2) {
      this.#searchFacadeService.setQueryForInPage(query, includeHardwareResults);
    } else {
      this.#searchFacadeService.clearInPage();
    }
  }

  clear(): void {
    this.queryFormControl.setValue('');
    this.#searchFacadeService.clearInPage();
    this.inputField.nativeElement.focus();
  }

  clearNoFocus(): void {
    this.queryFormControl.setValue('');
    this.#searchFacadeService.clearInPage();
  }

  goToResults() {
    const searchTerm = this.getSearchTerm();
    if (searchTerm) {
      this.#searchFacadeService.navigateToInPageResults(searchTerm);
    } else {
      this.inputField.nativeElement.focus();
    }
  }

  getSearchTerm() {
    return this.inPageFormGroup.get('query')?.value ?? '';
  }
}
