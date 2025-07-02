import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroComponent } from './intro.component';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

describe('IntroComponent', () => {
  let component: IntroComponent;
  let fixture: ComponentFixture<IntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(), TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(IntroComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
