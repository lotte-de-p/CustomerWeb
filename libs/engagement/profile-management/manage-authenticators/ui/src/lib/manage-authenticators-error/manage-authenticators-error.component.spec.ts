import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { windowFactory } from '@telenet/ng-lib-page';
import { ManageAuthenticatorsErrorComponent } from '../manage-authenticators-error/manage-authenticators-error.component';

describe('ManageAuthenticatorsErrorComponent', () => {
  let component: ManageAuthenticatorsErrorComponent;
  let fixture: ComponentFixture<ManageAuthenticatorsErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAuthenticatorsErrorComponent, TranslateModule.forRoot()],
      providers: [{ provide: 'Window', useValue: windowFactory() }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAuthenticatorsErrorComponent);
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
