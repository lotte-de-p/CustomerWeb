import { HomeNetwork } from '../home-network.model';

export interface HomeNetworkState {
  homeNetworkList: HomeNetwork[];
}

export const defaultState: HomeNetworkState = {
  homeNetworkList: [],
};
