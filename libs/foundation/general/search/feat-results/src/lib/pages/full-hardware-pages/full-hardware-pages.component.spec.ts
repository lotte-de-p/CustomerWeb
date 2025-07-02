import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullHardwarePagesComponent } from './full-hardware-pages.component';
import { defaultState, SearchFacadeService } from '@general/data-access-search';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';

describe('FullHardwarePagesComponent', () => {
  let component: FullHardwarePagesComponent;
  let fixture: ComponentFixture<FullHardwarePagesComponent>;
  let facadeService: SearchFacadeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullHardwarePagesComponent],
      providers: [
        SearchFacadeService,
        HttpClient,
        HttpHandler,
        provideMockStore({ initialState: { searchFeature: defaultState } }),
        { provide: 'Window', useValue: { location: { href: '' } } },
      ],
    }).compileComponents();

    facadeService = TestBed.inject(SearchFacadeService);
    fixture = TestBed.createComponent(FullHardwarePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('hardwarePagesPageChanged', () => {
    it('should call the facade', () => {
      const spy = jest.spyOn(facadeService, 'selectHardwarePage');

      component.hardwarePagesPageChanged(1);
      expect(spy).toBeCalledWith(1);
    });
  });
});
