import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBulletComponent } from './color-bullet.component';

describe('ColorBulletComponent', () => {
  let component: ColorBulletComponent;
  let fixture: ComponentFixture<ColorBulletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorBulletComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorBulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
