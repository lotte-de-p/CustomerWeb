import { ContextHubModelInterface } from '@telenet/ng-lib-page';
import { NBA } from './nba.model';
export declare class NBAList implements ContextHubModelInterface<NBAList> {
    readonly customerNumber: string;
    readonly interactionId: string;
    readonly channel: string;
    readonly containerName: string;
    readonly v: string;
    readonly actions: readonly NBA[];
    readonly isSuccess: boolean;
    constructor(nbaList?: unknown);
    enrich(json: unknown): NBAList;
    getNBA(): NBA;
}
//# sourceMappingURL=nba-list.model.d.ts.map