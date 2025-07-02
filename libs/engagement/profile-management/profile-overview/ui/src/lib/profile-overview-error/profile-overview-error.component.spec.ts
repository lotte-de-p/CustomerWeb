import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ProfileOverviewErrorComponent } from './profile-overview-error.component';
import { TranslateModule } from '@ngx-translate/core';
import { windowFactory } from '@telenet/ng-lib-page';

describe('ProfileOverviewErrorComponent', () => {
  let component: ProfileOverviewErrorComponent;
  let fixture: ComponentFixture<ProfileOverviewErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileOverviewErrorComponent, TranslateModule.forRoot()],
      providers: [{ provide: 'Window', useValue: windowFactory() }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileOverviewErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit errorAction event when handleErrorAction is called', () => {
    const emitSpy = jest.spyOn(component.errorAction, 'emit');
    component.handleErrorAction();
    expect(emitSpy).toHaveBeenCalled();
  });
});
