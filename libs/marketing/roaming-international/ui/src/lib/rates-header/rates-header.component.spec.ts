import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatesHeaderComponent } from './rates-header.component';
import { TranslateModule } from '@ngx-translate/core';

describe('RatesHeaderComponent', () => {
  let component: RatesHeaderComponent;
  let fixture: ComponentFixture<RatesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatesHeaderComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(RatesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
