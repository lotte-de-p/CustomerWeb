import { TranslateModule } from '@ngx-translate/core';
import { InvoiceInfoComponent } from './invoice-info.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('InvoiceInfoComponent', () => {
  let component: InvoiceInfoComponent;
  let fixture: ComponentFixture<InvoiceInfoComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(InvoiceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
