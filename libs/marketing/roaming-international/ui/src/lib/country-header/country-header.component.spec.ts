import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryHeaderComponent } from './country-header.component';
import { initCountry } from '@marketing/marketing/roaming-international/data-access';
import { TranslateModule } from '@ngx-translate/core';

describe('CountryHeaderComponent', () => {
  let component: CountryHeaderComponent;
  let fixture: ComponentFixture<CountryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryHeaderComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    expect(component.country).toBe(initCountry);
  });
});
