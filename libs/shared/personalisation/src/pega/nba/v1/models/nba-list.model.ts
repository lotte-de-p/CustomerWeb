import { ContextHubModelInterface } from '@telenet/ng-lib-page';
import { NBA } from './nba.model';

export class NBAList implements ContextHubModelInterface<NBAList> {
  public readonly customerNumber: string;
  public readonly interactionId: string;
  public readonly channel: string;
  public readonly containerName: string;
  public readonly v: string;
  public readonly actions: readonly NBA[] = [];
  public readonly isSuccess: boolean = false;

  constructor(nbaList?: unknown) {
    if (nbaList) {
      this.isSuccess = true;
      Object.assign(this, nbaList);
      if (nbaList['actions'] && nbaList['actions'][0]) {
        this.actions = nbaList['actions'].map((nba: NBA) => new NBA(nba));
      }
    }
  }

  enrich(json: unknown): NBAList {
    return new NBAList(json);
  }

  getNBA(): NBA {
    return this.actions && this.actions[0];
  }
}
