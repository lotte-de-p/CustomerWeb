import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SatelliteFerryInfoComponent } from './satellite-ferry-info.component';
import { TranslateModule } from '@ngx-translate/core';

describe('SatelliteFerryInfoComponent', () => {
  let component: SatelliteFerryInfoComponent;
  let fixture: ComponentFixture<SatelliteFerryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SatelliteFerryInfoComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SatelliteFerryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
