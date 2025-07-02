import { ComponentFixture, TestBed } from '@angular/core/testing';
import { windowFactory } from '@telenet/ng-lib-page';
import { ManageAuthenticatorsSkeletonComponent } from './manage-authenticators-skeleton.component';

describe('ManageAuthenticatorsSkeletonComponent', () => {
  let component: ManageAuthenticatorsSkeletonComponent;
  let fixture: ComponentFixture<ManageAuthenticatorsSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAuthenticatorsSkeletonComponent],
      providers: [{ provide: 'Window', useValue: windowFactory() }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAuthenticatorsSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
