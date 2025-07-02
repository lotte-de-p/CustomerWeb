import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AddressComponent } from './address.component';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [TranslateService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule, AddressComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    component.address = {
      city: 'Evergem',
      houseNumber: '12',
      street: 'Teststraat',
      country: 'Belgium',
      postalCode: '9940',
      addressId: 'addressId',
      subHouseNumber: 'A',
      box: '007',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the address correctly', () => {
    expect(fixture.nativeElement.querySelector('div').textContent.trim()).toEqual(
      'Teststraat 12 A ng.product-price-changes.address.box 007, 9940 Evergem'
    );
  });
});
