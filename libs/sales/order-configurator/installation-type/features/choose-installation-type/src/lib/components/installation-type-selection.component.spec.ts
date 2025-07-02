import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstallationTypeSelectionComponent } from './installation-type-selection.component';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('FeatInstallationTypeSelectionComponent', () => {
  let component: InstallationTypeSelectionComponent;
  let fixture: ComponentFixture<InstallationTypeSelectionComponent>;
  let store$: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [InstallationTypeSelectionComponent, StoreModule.forRoot({})],
    }).compileComponents();

    store$ = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(InstallationTypeSelectionComponent);
    jest.spyOn(store$, 'select');

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
    expect(component.viewModel).toBeDefined();
  });
});
