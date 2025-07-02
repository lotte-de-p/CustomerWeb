import { MapperInterface } from '@telenet/ng-lib-shared';
import { NBAList } from '../models/nba-list.model';
import { RawNBAListInterface, RawNBAResponseInterface } from '../interfaces/raw-nba-list.interface';
import * as i0 from "@angular/core";
export declare class NBAListMapper implements MapperInterface<RawNBAResponseInterface, NBAList> {
    toModel(response: RawNBAResponseInterface): NBAList;
    createNBAListResponse(rawNbaList: RawNBAListInterface): NBAList;
    private createNBAs;
    private createSellingArguments;
    static ɵfac: i0.ɵɵFactoryDeclaration<NBAListMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NBAListMapper>;
}
//# sourceMappingURL=nba-list.mapper.d.ts.map