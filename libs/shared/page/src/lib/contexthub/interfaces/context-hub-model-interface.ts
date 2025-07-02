export interface ContextHubModelInterface<U> {
  isSuccess: boolean;

  enrich<TData>(storeData: TData | U): U;
}
