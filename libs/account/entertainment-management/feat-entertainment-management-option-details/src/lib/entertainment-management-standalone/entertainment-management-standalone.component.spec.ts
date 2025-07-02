import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EntertainmentManagementStandaloneComponent } from './entertainment-management-standalone.component';

describe('EntertainmentManagementStandaloneComponent', () => {
  let component: EntertainmentManagementStandaloneComponent;
  let languageService: LanguageService;
  let fixture: ComponentFixture<EntertainmentManagementStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntertainmentManagementStandaloneComponent, HttpClientTestingModule],
      providers: [{ provide: 'Window', useValue: window }],
    }).compileComponents();

    fixture = TestBed.createComponent(EntertainmentManagementStandaloneComponent);
    languageService = TestBed.inject(LanguageService);
    jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.EN);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
