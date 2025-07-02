import { TranslateModule } from '@ngx-translate/core';
import { DeliverInfoComponent } from './delivery-info.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('DeliverInfoComponent', () => {
  let component: DeliverInfoComponent;
  let fixture: ComponentFixture<DeliverInfoComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliverInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
