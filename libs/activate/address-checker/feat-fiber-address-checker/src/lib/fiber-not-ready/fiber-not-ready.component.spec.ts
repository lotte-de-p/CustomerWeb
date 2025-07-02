import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiberNotReadyComponent } from './fiber-not-ready.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddressInterface } from '@address-checker/data-access';

describe('FiberNotReadyComponent', () => {
  const mockAddress: AddressInterface = {
    zipcode: '2000',
    subMunicipality: 'Antwerp',
    street: 'foostreet',
    houseNumber: '11',
    boxNumber: '20',
    addressGeoId: 'mockid',
  } as AddressInterface;

  let component: FiberNotReadyComponent;
  let fixture: ComponentFixture<FiberNotReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [],
    }).compileComponents();
    fixture = TestBed.createComponent(FiberNotReadyComponent);
    component = fixture.componentInstance;
    component.address = mockAddress;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('toAddressSelector', () => {
    it('should emit backToAddressSelector event when toAddressSelector is called', () => {
      jest.spyOn(component.backToAddressSelector, 'emit');
      component.toAddressSelector();
      expect(component.backToAddressSelector.emit).toHaveBeenCalled();
    });
  });

  describe('redirectToProductPage', () => {
    it('should emit toProductPage event when redirectToProductPage is called', () => {
      jest.spyOn(component.toProductPage, 'emit');
      component.redirectToProductPage();
      expect(component.toProductPage.emit).toHaveBeenCalled();
    });
  });
});
