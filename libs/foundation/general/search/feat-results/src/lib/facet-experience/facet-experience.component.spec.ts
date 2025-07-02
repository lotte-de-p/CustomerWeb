import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacetExperienceComponent } from './facet-experience.component';
import { expect } from '@jest/globals';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('FacetExperienceComponent', () => {
  let component: FacetExperienceComponent;
  let fixture: ComponentFixture<FacetExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FacetExperienceComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FacetExperienceComponent);
    component = fixture.componentInstance;
    component.facetGroups = [
      { title: 'My Awewsome Facet Group', facets: [{ id: 'tagId', label: 'My Tag', selected: false }] },
    ];
    component.collections = {
      title: 'My Collections',
      facets: [{ id: 'collectionId', label: 'Collection 1', selected: true }],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event when facet selection changes', () => {
    const emitEvent = jest.spyOn(component.facetChanged, 'emit');
    component.notifyFacetsChanged(0, 0);
    expect(emitEvent).toBeCalledWith({ groupIndex: 0, facetIndex: 0 });
  });

  it('should emit an event when collection selection changes', () => {
    const emitEvent = jest.spyOn(component.collectionChanged, 'emit');
    component.notifyCollectionChanged(0);
    expect(emitEvent).toBeCalledWith(0);
  });

  describe('toggleOverlay', () => {
    it('should toggle the overlay status', function () {
      component.overlayActive = false;
      component.toggleOverlay();
      expect(component.overlayActive).toBeTruthy();
      component.toggleOverlay();
      expect(component.overlayActive).toBeFalsy();
    });
    it('should emit event with the overlay status', function () {
      component.overlayActive = false;
      const emitEvent = jest.spyOn(component.overlayActiveChange, 'emit');
      component.toggleOverlay();
      expect(emitEvent).toHaveBeenCalledWith(true);
      component.toggleOverlay();
      expect(emitEvent).toHaveBeenCalledWith(false);
    });
  });
});
