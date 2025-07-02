import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { ProductTipContractsComponent } from './product-tip-contracts.component';
import { TIPContractInterface } from '../interfaces/tip-contract.interface';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

const tipContractsMockData = require('./../../../../../../../fixtures/http/netcracker/tip/tip-contracts.json');
export default {
  title: 'Products/Tip Contracts',
  component: ProductTipContractsComponent,
  declareComponent: false,
  decorators: [
    moduleMetadata({
      imports: [TgTranslateTestingModule.forRoot({ translations: require('../../../assets/i18n/nl.json') })],
      providers: [],
    }),
    applicationConfig({
      providers: [{ provide: 'Window', useValue: window }],
    }),
  ],
} as Meta<ProductTipContractsComponent>;

export const Primary = {
  render: (args: ProductTipContractsComponent) => ({
    props: args,
  }),
  args: {
    componentInstanceID: '',
    tipContracts: tipContractsMockData as TIPContractInterface,
  },
};
