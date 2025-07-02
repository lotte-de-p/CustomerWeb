import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RateCardComponent } from './rate-card.component';
import { initRate } from '@marketing/marketing/roaming-international/data-access';
import { TranslateModule } from '@ngx-translate/core';

describe('RateCardComponent', () => {
  let component: RateCardComponent;
  let fixture: ComponentFixture<RateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RateCardComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(RateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    expect(component.rate).toBe(initRate);
  });
});
