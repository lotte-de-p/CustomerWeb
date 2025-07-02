import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HardwarePriceComponent } from './hardware-price.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('HardwarePriceComponent', () => {
  let component: HardwarePriceComponent;
  let fixture: ComponentFixture<HardwarePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: window }],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        HardwarePriceComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HardwarePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
