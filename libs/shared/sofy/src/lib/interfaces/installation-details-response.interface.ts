export interface InstallationDetailsResponse {
  customerinstallationdetails: CustomerInstallationDetailsInterface;
}

export interface CustomerInstallationDetailsInterface {
  customertype: string;
  installationdetails: InstallationDetailsInterface[];
}

export interface InstallationDetailsInterface {
  installtype: string;
  hardwareneeded?: string[];
  deliveryoptions?: string[];
}
