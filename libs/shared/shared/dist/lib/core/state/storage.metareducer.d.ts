import { ActionReducer, Action } from '@ngrx/store';
export declare function createStorageMetaReducer(storageKey: string, stateKeys: string[]): <S, A extends Action = Action>(reducer: ActionReducer<S, A>) => (state: S | undefined, action: A) => S;
//# sourceMappingURL=storage.metareducer.d.ts.map