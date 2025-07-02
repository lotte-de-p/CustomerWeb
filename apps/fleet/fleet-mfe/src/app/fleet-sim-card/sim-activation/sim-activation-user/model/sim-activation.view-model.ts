export interface SimActivationViewModel {
  orderNumber: string;
  msisdn: string;
  simCardNumber: string;
  showSimImg: boolean;
  hideForm: boolean;
  disableActivateButton: boolean;
  isSimCardNumberFormatInvalid: boolean;
  showDefaultError: boolean;
  showSimCardAlreadyActivatedError: boolean;
  showWrongSimCardNumberError: boolean;
  showSimActivationNotPossibleError: boolean;
}

export const defaultSimActivationViewModel: SimActivationViewModel = {
  orderNumber: '',
  msisdn: '',
  simCardNumber: '',
  showSimImg: false,
  hideForm: false,
  disableActivateButton: true,
  isSimCardNumberFormatInvalid: false,
  showDefaultError: false,
  showSimCardAlreadyActivatedError: false,
  showWrongSimCardNumberError: false,
  showSimActivationNotPossibleError: false,
};
