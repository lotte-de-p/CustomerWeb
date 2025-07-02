import { PmProfileIconComponent } from './pm-profile-icon.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { windowFactory } from '@telenet/ng-lib-page';

describe('PmProfileIconComponent', () => {
  let component: PmProfileIconComponent;
  let fixture: ComponentFixture<PmProfileIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PmProfileIconComponent, TranslateModule.forRoot()],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: 'Window', useValue: windowFactory() }],
    });

    fixture = TestBed.createComponent(PmProfileIconComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('profilePictureUrl', '/url');
    fixture.componentRef.setInput('hasProfilePicture', true);
    fixture.componentRef.setInput('isBaseCustomer', false);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
