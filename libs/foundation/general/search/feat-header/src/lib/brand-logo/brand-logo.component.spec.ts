import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandLogoComponent } from './brand-logo.component';

describe('LogoComponent', () => {
  let component: BrandLogoComponent;
  let fixture: ComponentFixture<BrandLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
