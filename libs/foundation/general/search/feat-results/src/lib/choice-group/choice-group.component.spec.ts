import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceGroupComponent, ChoiceType } from './choice-group.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('ChoiceGroupComponent', () => {
  let component: ChoiceGroupComponent;
  let fixture: ComponentFixture<ChoiceGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ChoiceGroupComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ChoiceGroupComponent);
    component = fixture.componentInstance;
    component.type = ChoiceType.SINGLE;
    component.groupPrefix = 'prefix';
    component.facetGroup = { title: 'My Title Is Awesome', facets: [{ id: 'id', label: 'My Facet', selected: false }] };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the correct group', () => {
    expect(component.getGroup()).toBe('prefix_mytitleisawesome');
  });

  it('should emit event when a choice selection is changed', () => {
    const selectionChanged = jest.spyOn(component.selectionChanged, 'emit');
    component.notifySelection(0);
    expect(selectionChanged).toHaveBeenCalledWith(0);
  });
});
