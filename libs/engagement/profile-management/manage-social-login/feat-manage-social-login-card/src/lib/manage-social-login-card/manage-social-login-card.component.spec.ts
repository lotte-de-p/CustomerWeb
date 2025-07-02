import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageSocialLoginCardComponent } from './manage-social-login-card.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('ManageSocialLoginCardComponent', () => {
  let component: ManageSocialLoginCardComponent;
  let fixture: ComponentFixture<ManageSocialLoginCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageSocialLoginCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
    expect(component.itsmeIcon).toEqual('/assets/logo_itsme.svg');
  });
});
