import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CustomerProfileFacade } from '@profile-management/data-access';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ManageAuthenticatorsComponent } from './manage-authenticators.component';

describe('ManageAuthenticatorsComponent', () => {
  let component: ManageAuthenticatorsComponent;
  let fixture: ComponentFixture<ManageAuthenticatorsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        ManageAuthenticatorsComponent,
        StoreModule.forRoot({}),
        EffectsModule.forRoot({}),
        HttpClientTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [CustomerProfileFacade, { provide: 'Window', useValue: {} }],
    });

    fixture = TestBed.createComponent(ManageAuthenticatorsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize authenticators$', () => {
    const customerProfileFacade = TestBed.inject(CustomerProfileFacade);
    jest.spyOn(customerProfileFacade, 'loadAuthenticators');

    component.initAfterLoggedIn();

    expect(customerProfileFacade.loadAuthenticators).toHaveBeenCalled();
  });
});
