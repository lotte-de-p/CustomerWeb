import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopResultsComponent } from './top-results.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

describe('TopResultsComponent', () => {
  let component: TopResultsComponent;
  let fixture: ComponentFixture<TopResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopResultsComponent, EffectsModule.forRoot([]), StoreModule.forRoot({})],
      providers: [HttpClient, HttpHandler, provideMockStore({}), { provide: 'Window', useValue: window }],
    }).compileComponents();

    jest.spyOn(console, 'info').mockImplementation(jest.fn);

    fixture = TestBed.createComponent(TopResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
