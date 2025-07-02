import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageControllerComponent } from './page-controller.component';
import { MockComponents } from 'ng-mocks';
import { FullHardwarePagesComponent } from '../full-hardware-pages/full-hardware-pages.component';
import { FullContentPagesComponent } from '../full-content-pages/full-content-pages.component';
import { BlendedContentPagesComponent } from '../blended-content-pages/blended-content-pages.component';
import { BlendedHardwarePagesComponent } from '../blended-hardware-pages/blended-hardware-pages.component';
import { NoResultsComponent } from '../no-results/no-results.component';
import { SearchResultItem } from '@general/data-access-search';
import { By } from '@angular/platform-browser';

describe('PageControllerComponent', () => {
  let component: PageControllerComponent;
  let fixture: ComponentFixture<PageControllerComponent>;

  beforeEach(() => {
    const importsToMock = [
      FullHardwarePagesComponent,
      FullContentPagesComponent,
      BlendedHardwarePagesComponent,
      BlendedContentPagesComponent,
      NoResultsComponent,
    ];
    TestBed.overrideComponent(PageControllerComponent, {
      remove: {
        imports: importsToMock,
      },
      add: {
        imports: [MockComponents(...importsToMock)],
      },
    }).compileComponents();

    fixture = TestBed.createComponent(PageControllerComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show full hardware when no content pages are present', () => {
    component.hardwareItems = Array.of({} as SearchResultItem);
    component.contentItems = [];
    component.loading = false;

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('tg-foundation-general-search-full-hardware-pages'))).toBeTruthy();
  });

  it('should show full content when no hardware is present', () => {
    component.hardwareItems = [];
    component.contentItems = Array.of({} as SearchResultItem);
    component.loading = false;

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('tg-foundation-general-search-full-content-pages'))).toBeTruthy();
  });

  it('should show blended pages when both hardware and content pages are present', () => {
    component.hardwareItems = Array.of({} as SearchResultItem);
    component.contentItems = Array.of({} as SearchResultItem);
    component.loading = false;

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('tg-foundation-general-search-blended-hardware-pages'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('tg-foundation-general-search-blended-content-pages'))).toBeTruthy();
  });
});
