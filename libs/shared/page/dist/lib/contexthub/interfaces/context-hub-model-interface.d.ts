export interface ContextHubModelInterface<U> {
    isSuccess: boolean;
    enrich<TData>(storeData: TData | U): U;
}
//# sourceMappingURL=context-hub-model-interface.d.ts.map