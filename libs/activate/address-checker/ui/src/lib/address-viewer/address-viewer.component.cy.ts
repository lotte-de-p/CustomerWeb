import { AddressViewerComponent } from './address-viewer.component';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

describe('AddressViewerComponent', () => {
  it('should mount the component', () => {
    cy.mount(AddressViewerComponent, {
      imports: [TgTranslateTestingModule.forRoot()],
      componentProperties: {
        address: {
          addressGeoId: '123',
          subMunicipality: 'Kontich',
          zipcode: '2550',
          street: 'Kerkhofstraat',
          houseNumber: '1',
          boxNumber: 'A',
        },
      },
    });
  });
});
