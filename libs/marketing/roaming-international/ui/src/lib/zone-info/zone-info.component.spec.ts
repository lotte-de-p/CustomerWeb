import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZoneInfoComponent } from './zone-info.component';
import { initCountry } from '@marketing/marketing/roaming-international/data-access';
import { TranslateModule } from '@ngx-translate/core';

describe('ZoneInfoComponent', () => {
  let component: ZoneInfoComponent;
  let fixture: ComponentFixture<ZoneInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneInfoComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ZoneInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    expect(component.country).toBe(initCountry);
    expect(component.shouldDisplay()).toBeFalsy();
  });

  it('when country roamingzone is ZoneEU then shouldDisplay is true', () => {
    component.country.roamingZone = 'ZoneEU';
    expect(component.shouldDisplay()).toBeTruthy();
  });
});
