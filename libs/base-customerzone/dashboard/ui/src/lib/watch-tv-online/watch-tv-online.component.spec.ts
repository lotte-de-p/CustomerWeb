import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WatchTvOnlineComponent } from './watch-tv-online.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { ElementRef } from '@angular/core';

describe('WatchTvOnlineComponent', () => {
  let component: WatchTvOnlineComponent;
  let fixture: ComponentFixture<WatchTvOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WatchTvOnlineComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [TranslateService, { provide: 'Window', useValue: { location: {} } }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchTvOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Restore mocks after each test
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('watchApp', () => {
    it('should open iOS URL if user agent is iPhone or iPad', () => {
      const mockOpen = jest.spyOn(window, 'open').mockImplementation(() => {
        return {} as Window | null;
      });
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'iphone',
        configurable: true,
      });

      component.watchTvIosUrl = 'https://ios-url.com';
      component.watchApp();

      expect(mockOpen).toHaveBeenCalledWith('https://ios-url.com', '_blank');
    });

    it('should open Android URL if user agent is Android', () => {
      const mockOpen = jest.spyOn(window, 'open').mockImplementation(() => {
        return {} as Window | null;
      });
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'android',
        configurable: true,
      });

      component.watchTvAndroidUrl = 'https://android-url.com';
      component.watchApp();

      expect(mockOpen).toHaveBeenCalledWith('https://android-url.com', '_blank');
    });

    it('should show modal if user agent is neither iOS nor Android', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'desktop',
        configurable: true,
      });
      component.linkToStore = new ElementRef({
        showModal: jest.fn(),
        close: jest.fn(),
      });

      component.watchApp();

      expect(component.linkToStore.nativeElement.showModal).toHaveBeenCalled();
    });
  });

  describe('watchOnline', () => {
    it('should open watchTvUrl in a new tab', () => {
      const mockOpen = jest.spyOn(window, 'open').mockImplementation(() => {
        return {} as Window | null;
      });
      component.watchTvUrl = 'https://watch-tv-url.com';

      component.watchOnline();

      expect(mockOpen).toHaveBeenCalledWith('https://watch-tv-url.com', '_blank');
    });
  });

  describe('closeModal', () => {
    it('should close the modal', () => {
      component.linkToStore = new ElementRef({
        showModal: jest.fn(),
        close: jest.fn(),
      });
      component.closeModal();

      expect(component.linkToStore.nativeElement.close).toHaveBeenCalled();
    });
  });
});
