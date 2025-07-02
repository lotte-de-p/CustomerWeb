import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EntertainmentManagementTieredListComponent } from './entertainment-management-tiered-list.component';
import { TranslateModule } from '@ngx-translate/core';

describe('EntertainmentManagementTieredListComponent', () => {
  let component: EntertainmentManagementTieredListComponent;
  let languageService: LanguageService;
  let fixture: ComponentFixture<EntertainmentManagementTieredListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntertainmentManagementTieredListComponent, HttpClientTestingModule, TranslateModule.forRoot()],
      providers: [{ provide: 'Window', useValue: window }],
    }).compileComponents();

    fixture = TestBed.createComponent(EntertainmentManagementTieredListComponent);
    languageService = TestBed.inject(LanguageService);
    jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.NL);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
