import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-foundation-general-search-pagination',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="search__pagination pt--xs">
      <div class="pagination ">
        <ul class="pagination__list">
          <li class="pagination__list__item" *ngIf="displayLeftArrow()">
            <a href="javascript:void(0);" class="pagination__list__link" (click)="goToPreviousPage()">
              <i class="icon icon-chevron-left font-weight--bold"></i>
            </a>
          </li>
          <ng-container *ngFor="let pageNumber of getVisiblePageNumbersWithDots()">
            <li
              class="pagination__list__item"
              [ngClass]="isCurrent(pageNumber) ? 'active' : 'in-active'"
              *ngIf="isPageNumber(pageNumber)">
              <a
                href="javascript:void(0);"
                (click)="goToPage(pageNumber)"
                [ngClass]="
                  isCurrent(pageNumber) ? 'pagination__list__item__active' : 'pagination__list__item__in-active'
                ">
                {{ pageNumber }}
              </a>
            </li>
            <li class="pagination__list__item" *ngIf="!isPageNumber(pageNumber)">
              {{ pageNumber }}
            </li>
          </ng-container>
          <li class="pagination__list__item" *ngIf="displayRightArrow()">
            <a
              href="javascript:void(0);"
              class="pagination__list__link pagination__list__link--enabled"
              (click)="goToNextPage()">
              <i class="icon icon-chevron-right font-weight--bold"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [],
})
export class PaginationComponent implements OnChanges {
  private readonly DOTS = '...';
  private readonly NUMBER_OF_PAGES = 5;

  @Input() totalPages: number;
  @Input() currentPageNumber: number;
  @Output() pageChanged = new EventEmitter<number>();
  visiblePageNumbers: number[] = [];

  ngOnChanges(): void {
    this.visiblePageNumbers = this.createPageNumberArray();
  }

  goToPreviousPage(): void {
    this.emitNewPage(this.currentPageNumber - 1);
  }

  goToNextPage(): void {
    this.emitNewPage(this.currentPageNumber + 1);
  }

  goToPage(s: string): void {
    const i = +s;
    if (!isNaN(i)) {
      this.emitNewPage(+s);
    }
  }

  isCurrent(s: string): boolean {
    return this.isPageNumber(s) && this.currentPageNumber === +s;
  }

  getVisiblePageNumbersWithDots() {
    const first = this.visiblePageNumbers[0];
    const last = this.visiblePageNumbers[this.visiblePageNumbers.length - 1];
    const output = this.visiblePageNumbers.map((i) => i.toString());
    if (first !== 1) {
      output.splice(0, 1, '1', this.DOTS);
    }
    if (last !== this.totalPages) {
      output.splice(output.length - 1, 1, this.DOTS, this.totalPages.toString());
    }
    return output;
  }

  isPageNumber(s: string) {
    return !isNaN(+s);
  }

  displayLeftArrow(): boolean {
    return this.visiblePageNumbers.length !== 0 && this.visiblePageNumbers[0] !== 1;
  }

  displayRightArrow(): boolean {
    return (
      this.visiblePageNumbers.length !== 0 &&
      this.totalPages - this.visiblePageNumbers[this.visiblePageNumbers.length - 1] !== 0
    );
  }

  private emitNewPage(number: number): void {
    this.pageChanged.emit(number);
  }

  private createPageNumberArray(): number[] {
    const halfNumberOfPages = Math.ceil(this.NUMBER_OF_PAGES / 2);

    if (this.totalPages <= this.NUMBER_OF_PAGES) {
      return this.generatePageRange(1, this.totalPages);
    }

    if (this.currentPageNumber <= halfNumberOfPages) {
      return this.generatePageRange(1, this.NUMBER_OF_PAGES);
    }

    if (this.currentPageNumber + halfNumberOfPages - 1 >= this.totalPages) {
      return this.generatePageRange(this.totalPages - this.NUMBER_OF_PAGES + 1, this.totalPages);
    }

    const startPage = this.currentPageNumber - halfNumberOfPages + 1;
    const endPage = this.currentPageNumber + halfNumberOfPages - 1;

    return this.generatePageRange(startPage, endPage);
  }

  private generatePageRange(start: number, end: number): number[] {
    return Array.from(Array(end - start + 1).keys()).map((i) => start + i);
  }
}
