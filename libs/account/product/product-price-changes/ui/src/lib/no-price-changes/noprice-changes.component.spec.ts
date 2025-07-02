import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { NoPriceChangesComponent } from './no-price-changes.component';

describe('NoPriceChangesComponent', () => {
  let component: NoPriceChangesComponent;
  let fixture: ComponentFixture<NoPriceChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [TranslateModule.forRoot(), NoPriceChangesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoPriceChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
