import { ComponentFixture, TestBed } from '@angular/core/testing';
import { windowFactory } from '@telenet/ng-lib-page';
import { ManageAuthenticatorsLoaderComponent } from './manage-authenticators-loader.component';

describe('ManageAuthenticatorsLoaderComponent', () => {
  let component: ManageAuthenticatorsLoaderComponent;
  let fixture: ComponentFixture<ManageAuthenticatorsLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAuthenticatorsLoaderComponent],
      providers: [{ provide: 'Window', useValue: windowFactory() }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAuthenticatorsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
