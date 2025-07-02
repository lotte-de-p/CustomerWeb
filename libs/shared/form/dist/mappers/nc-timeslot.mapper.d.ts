import { NCTimeSlotList } from '../models';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { RawNCTimeSlotListInterface } from '../interfaces';
import * as i0 from "@angular/core";
export declare class NCTimeSlotMapper implements MapperInterface<RawNCTimeSlotListInterface, NCTimeSlotList> {
    private readonly omapiProductMapper;
    constructor(omapiProductMapper: OmapiProductMapper);
    toModel(rawNCTimeSlot: RawNCTimeSlotListInterface): NCTimeSlotList;
    private createAvailabilities;
    private createTimeSlots;
    private createTimeSlot;
    static ɵfac: i0.ɵɵFactoryDeclaration<NCTimeSlotMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NCTimeSlotMapper>;
}
//# sourceMappingURL=nc-timeslot.mapper.d.ts.map