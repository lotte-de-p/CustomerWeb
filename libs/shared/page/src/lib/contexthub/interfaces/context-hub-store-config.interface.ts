import { ContextHubModelInterface } from './context-hub-model-interface';

export interface ContextHubStoreConfigInterface<T extends ContextHubModelInterface<T>> {
  storeModel: T;
  storeName: string;
  serviceName: string;
}
