import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfileManagementComponent } from './profile-management.component';

describe('ProfileManagementComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProfileManagementComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'profile-management-mfe'`, () => {
    const fixture = TestBed.createComponent(ProfileManagementComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('profile-management-mfe');
  });
});
