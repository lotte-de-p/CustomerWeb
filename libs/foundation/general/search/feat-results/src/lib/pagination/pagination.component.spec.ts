import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { anyNumber } from 'ts-mockito';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.currentPageNumber = 1;
    component.totalPages = 10;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getVisiblePageNumbersWithDots', () => {
    it('no dots', () => {
      component.currentPageNumber = 1;
      component.totalPages = 5;
      component.ngOnChanges();
      expect(component.getVisiblePageNumbersWithDots()).toStrictEqual(['1', '2', '3', '4', '5']);
    });

    it('show trailing dots', () => {
      component.currentPageNumber = 1;
      component.totalPages = 10;
      component.ngOnChanges();
      expect(component.getVisiblePageNumbersWithDots()).toStrictEqual(['1', '2', '3', '4', '...', '10']);
    });

    it('show leading dots', () => {
      component.currentPageNumber = 8;
      component.totalPages = 10;
      component.ngOnChanges();
      expect(component.getVisiblePageNumbersWithDots()).toStrictEqual(['1', '...', '7', '8', '9', '10']);
    });

    it('show both leading and trailing dots', () => {
      component.currentPageNumber = 5;
      component.totalPages = 10;
      component.ngOnChanges();
      expect(component.getVisiblePageNumbersWithDots()).toStrictEqual(['1', '...', '4', '5', '6', '...', '10']);
    });
  });

  describe('isCurrent', () => {
    it('match', () => {
      expect(component.isCurrent('1')).toBeTruthy();
    });

    it('no match', () => {
      expect(component.isCurrent('2')).toBeFalsy();
    });

    it('not a number', () => {
      expect(component.isCurrent('...')).toBeFalsy();
      expect(component.isCurrent('abc')).toBeFalsy();
    });
  });

  describe('display arrows', () => {
    it('left', () => {
      component.currentPageNumber = 10;
      component.totalPages = 10;
      component.ngOnChanges();
      expect(component.displayRightArrow()).toBeFalsy();
      expect(component.displayLeftArrow()).toBeTruthy();
    });

    it('right', () => {
      component.currentPageNumber = 1;
      component.totalPages = 10;
      component.ngOnChanges();
      expect(component.displayRightArrow()).toBeTruthy();
      expect(component.displayLeftArrow()).toBeFalsy();
    });

    it('both', () => {
      component.currentPageNumber = 5;
      component.totalPages = 10;
      component.ngOnChanges();
      expect(component.displayRightArrow()).toBeTruthy();
      expect(component.displayLeftArrow()).toBeTruthy();
    });
  });

  describe('page changed events', () => {
    it('goToNextPage', () => {
      component.currentPageNumber = 1;
      component.totalPages = 10;
      component.ngOnChanges();
      const pageChanged = jest.spyOn(component.pageChanged, 'emit');
      component.goToNextPage();
      expect(pageChanged).toHaveBeenCalledWith(2);
    });

    it('goToPreviousPage', () => {
      component.currentPageNumber = 10;
      component.totalPages = 10;
      component.ngOnChanges();
      const pageChanged = jest.spyOn(component.pageChanged, 'emit');
      component.goToPreviousPage();
      expect(pageChanged).toHaveBeenCalledWith(9);
    });

    it('goToPage', () => {
      component.currentPageNumber = 1;
      component.totalPages = 10;
      component.ngOnChanges();
      const pageChanged = jest.spyOn(component.pageChanged, 'emit');
      component.goToPage('1');
      expect(pageChanged).toHaveBeenCalledWith(1);
    });

    it('goToPage should not trigger an event when input is NaN', () => {
      component.currentPageNumber = 1;
      component.totalPages = 10;
      component.ngOnChanges();
      const pageChanged = jest.spyOn(component.pageChanged, 'emit');
      component.goToPage('...');
      expect(pageChanged).not.toHaveBeenCalledWith(anyNumber);
    });
  });
});
