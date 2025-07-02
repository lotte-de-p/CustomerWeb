import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DidyoumeanComponent } from './didyoumean.component';
import { UrlService } from '@telenet/ng-lib-page';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('DidyoumeanComponent', () => {
  let component: DidyoumeanComponent;
  let fixture: ComponentFixture<DidyoumeanComponent>;
  let urlService: UrlService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DidyoumeanComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [UrlService, { provide: 'Window', useValue: window }],
    }).compileComponents();

    fixture = TestBed.createComponent(DidyoumeanComponent);
    urlService = TestBed.inject(UrlService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect when a link is clicked', () => {
    const replaceURLParametersSpy = jest.spyOn(urlService, 'replaceURLParameters');
    const getCurrentUrlSpy = jest.spyOn(urlService, 'getCurrentUrl');
    const redirectToSpy = jest.spyOn(urlService, 'redirectTo');

    component.searchFor('test');

    expect(replaceURLParametersSpy).toBeCalledWith([{ key: 'q', value: 'test' }]);
    expect(getCurrentUrlSpy).toBeCalled();
    expect(redirectToSpy).toBeCalled();
  });
});
