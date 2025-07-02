import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedoTestComponent } from './redo-test.component';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

describe('RedoTestComponent', () => {
  let component: RedoTestComponent;
  let fixture: ComponentFixture<RedoTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedoTestComponent, TgTranslateTestingModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(RedoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
