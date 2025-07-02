import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressToggleComponent } from './address-toggle.component';
import { PathCategorisationService } from '@telenet/ng-lib-page';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

describe('AddressToggleComponent', () => {
  let component: AddressToggleComponent;
  let fixture: ComponentFixture<AddressToggleComponent>;

  const mockWindow = {
    location: {
      href: 'http://testurl.com',
      search: '',
      hash: '',
      origin: '',
      pathname: '',
      assign: new Function(),
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AddressToggleComponent,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        FormBuilder,
        PathCategorisationService,
        {
          provide: 'Window',
          useValue: mockWindow,
        },
      ],
    }).compileComponents();

    mockWindow.location.assign = jest.fn();
    fixture = TestBed.createComponent(AddressToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
