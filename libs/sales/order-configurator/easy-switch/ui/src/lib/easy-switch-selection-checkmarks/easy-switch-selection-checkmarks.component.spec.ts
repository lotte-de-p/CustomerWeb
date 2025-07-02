import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EasySwitchSelectionCheckmarksComponent } from './easy-switch-selection-checkmarks.component';
import { TranslateModule } from '@ngx-translate/core';

describe('EasySwitchSelectionCheckmarksComponent', () => {
  let component: EasySwitchSelectionCheckmarksComponent;
  let fixture: ComponentFixture<EasySwitchSelectionCheckmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasySwitchSelectionCheckmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
