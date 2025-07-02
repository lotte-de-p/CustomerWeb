import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuggestionsComponent } from './suggestions.component';
import { KeyboardNavigationService } from '@general/data-access-search';

describe('SuggestionsComponent', () => {
  let component: SuggestionsComponent;
  let fixture: ComponentFixture<SuggestionsComponent>;
  let keyboardNavigationService: KeyboardNavigationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestionsComponent],
      providers: [],
    }).compileComponents();

    keyboardNavigationService = TestBed.inject(KeyboardNavigationService);
    fixture = TestBed.createComponent(SuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call KeyboardNavigationService on focus', () => {
    jest.spyOn(keyboardNavigationService, 'setFocusedElement');
    const mockElement = document.createElement('div');
    component.setFocus(mockElement);
    expect(keyboardNavigationService.setFocusedElement).toBeCalledWith(mockElement);
  });
});
