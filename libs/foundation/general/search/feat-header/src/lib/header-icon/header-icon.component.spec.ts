import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIconComponent } from './header-icon.component';

describe('HeaderIconComponent', () => {
  let component: HeaderIconComponent;
  let fixture: ComponentFixture<HeaderIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
