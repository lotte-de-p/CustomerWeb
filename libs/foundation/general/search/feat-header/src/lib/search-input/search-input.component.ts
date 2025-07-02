import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  inject,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestionsComponent } from '../suggestions/suggestions.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap, first } from 'rxjs/operators';
import { AccessibilitySpanComponent, ButtonComponent, IconComponent } from '@general/ui-search';
import { TopResultsComponent } from '../top-results/top-results.component';
import { BrandLogoComponent } from '../brand-logo/brand-logo.component';
import { HeaderIconComponent } from '../header-icon/header-icon.component';
import { HeaderButtonComponent } from '../header-button/header-button.component';
import {
  KeyboardNavigationDirective,
  SearchFacadeService,
  SearchNgrxModule,
  SearchTypes,
} from '@general/data-access-search';
import { TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'tg-foundation-general-search-search-input',
  standalone: true,
  imports: [
    CommonModule,
    SuggestionsComponent,
    ReactiveFormsModule,
    IconComponent,
    TopResultsComponent,
    BrandLogoComponent,
    AccessibilitySpanComponent,
    HeaderIconComponent,
    ButtonComponent,
    HeaderButtonComponent,
    TranslateModule,
    KeyboardNavigationDirective,
    SearchNgrxModule,
  ],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent implements OnInit {
  @Input() detailsPagePath: string;
  @Input() suggestionsFieldName: string;
  @Input() includeHardwareResults: boolean;
  @ViewChild('inputField') searchInputElement: ElementRef;

  readonly #searchFacadeService = inject(SearchFacadeService);
  readonly #urlService = inject(UrlService);
  readonly #cdr = inject(ChangeDetectorRef);

  isSearchExpanded = false;
  queryFormControl = new FormControl('');
  searchFormGroup = new FormGroup({ query: this.queryFormControl });
  suggestions$ = this.#searchFacadeService.suggestions$;
  isSearchExpanded$ = this.#searchFacadeService.headerExpanded$;

  constructor(@Inject(ElementRef) readonly elementRef: ElementRef) {}

  ngOnInit(): void {
    this.checkQueryParamsAndSetQueryIfNeeded();
    this.queryFormControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(250),
        tap((value) => this.onValueChanged(value ?? '')),
        untilDestroyed(this)
      )
      .subscribe();

    this.isSearchExpanded$.pipe(untilDestroyed(this)).subscribe((expanded) => (this.isSearchExpanded = expanded));

    this.#searchFacadeService.query$
      .pipe(distinctUntilChanged(), untilDestroyed(this))
      .subscribe((query) => this.queryFormControl.setValue(query));

    this.#searchFacadeService
      .getHeaderExpanded()
      .pipe(untilDestroyed(this))
      .subscribe((headerExpanded) => {
        const overflowHiddenClass = 'overflow--hidden';

        if (headerExpanded) {
          document.body?.classList.add(overflowHiddenClass);
        } else {
          document.body?.classList.remove(overflowHiddenClass);
        }
      });
  }

  onValueChanged(query: string) {
    if (query.length > 2) {
      this.#searchFacadeService.searchSuggestions(query, this.suggestionsFieldName, this.includeHardwareResults);
    }
  }

  clear(closeHeader: boolean = false, clearInput: boolean = true): void {
    if (clearInput) {
      this.queryFormControl.setValue('');
      this.searchInputElement.nativeElement.focus();
    }

    this.#searchFacadeService.clearHeader();
    if (closeHeader) {
      this.#searchFacadeService.setHeaderExpanded(false);
    }
  }

  redirectOrUpdateSearchResultsPage(searchResultsPageUrl: string) {
    this.#searchFacadeService
      .redirectOrUpdateSearchResultsPage(searchResultsPageUrl, this.includeHardwareResults)
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  setExpanded(isExpanded: boolean) {
    this.#searchFacadeService.setHeaderExpanded(isExpanded);
    this.#searchFacadeService.setLastUsedComponent(isExpanded ? SearchTypes.HEADER_SEARCH : SearchTypes.UNKNOWN);
  }

  @HostListener('window:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.#searchFacadeService.setHeaderExpanded(false);
      this.clear();
    }
  }

  private checkQueryParamsAndSetQueryIfNeeded(): void {
    const query = this.#urlService.getRequestParameters()['q'];
    if (query) {
      this.queryFormControl.setValue(query);
      this.#searchFacadeService.setQuery(query);
      this.#cdr.detectChanges();
    }
  }

  searchOrOpenHeader() {
    const query = this.searchFormGroup.get('query')?.value ?? '';
    this.#searchFacadeService
      .getSearchResultsPageUrl(query)
      .pipe(first())
      .subscribe((url) => {
        this.#searchFacadeService.setQuery(query);
        if (this.isSearchExpanded) {
          this.redirectOrUpdateSearchResultsPage(url);
          this.setExpanded(false);
        } else {
          this.setExpanded(true);
        }
      });
  }
}
