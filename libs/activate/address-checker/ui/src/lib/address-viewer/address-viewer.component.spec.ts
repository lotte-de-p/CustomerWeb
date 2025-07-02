import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressInterface } from '@address-checker/data-access';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AddressViewerComponent } from './address-viewer.component';

describe('AddressViewer', () => {
  let component: AddressViewerComponent;
  let fixture: ComponentFixture<AddressViewerComponent>;

  const address: AddressInterface = {
    street: 'Onze-Lieve-Vrouwstraat',
    houseNumber: '15',
    zipcode: '2180',
    subMunicipality: 'Ekeren',
    addressGeoId: '9876568899876',
    boxNumber: '06',
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      declarations: [],
      schemas: [],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressViewerComponent);
    component = fixture.componentInstance;
    component.address = address;
    component.messageGroupName = 'address-box';
    fixture.detectChanges();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AddressViewerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('editAddress', () => {
    it('should emit addressId', () => {
      jest.spyOn(component.edit, 'emit');

      component.editAddress();

      expect(component.edit.emit).toHaveBeenCalledWith(address.addressGeoId);
    });
  });
});
