import * as Factory from 'factory.ts';
import {
  CustomerInstallationDetailsInterface,
  InstallationDetailsInterface,
  InstallationDetailsResponse,
} from './installation-details-response.interface';

export const installationDetailsInterfaceTestFactory = Factory.Sync.makeFactory<InstallationDetailsInterface>({
  deliveryoptions: ['home-delivery', 'pick-up'],
  hardwareneeded: ['modem', 'set-top-box', 'powerline'],
  installtype: 'self-install',
});

export const customerInstallationDetailsTestFactory = Factory.Sync.makeFactory<CustomerInstallationDetailsInterface>({
  customertype: 'AQUISITION',
  installationdetails: [installationDetailsInterfaceTestFactory.build()],
});

export const installationDetailsResponseInterfaceTestFactory = Factory.Sync.makeFactory<InstallationDetailsResponse>({
  customerinstallationdetails: customerInstallationDetailsTestFactory.build(),
});
