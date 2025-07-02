import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryItemComponent } from './summary-item.component';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

describe('SummaryItemComponent', () => {
  let component: SummaryItemComponent;
  let fixture: ComponentFixture<SummaryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryItemComponent, TgTranslateTestingModule.forRoot({})],
    }).compileComponents();

    fixture = TestBed.createComponent(SummaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
