import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NavsOverlayComponent } from './navs-overlay.component';

describe('NavsOverlayComponent', () => {
  let component: NavsOverlayComponent;
  let fixture: ComponentFixture<NavsOverlayComponent>;
  const TEST_URL = 'http://testurl.com';
  const mockWindow = {
    location: {
      href: TEST_URL,
      search: '',
      hash: '',
      origin: '',
      pathname: '',
      assign: new Function(),
    },
    document: {
      documentElement: {
        lang: 'NL',
      },
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavsOverlayComponent, CommonModule, TranslateModule.forRoot()],
      providers: [{ provide: 'Window', useValue: mockWindow }],
    }).compileComponents();

    fixture = TestBed.createComponent(NavsOverlayComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
