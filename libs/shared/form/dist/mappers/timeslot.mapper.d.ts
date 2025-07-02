import { RawCafeTimeslotListInterface } from '../interfaces';
import { CafeTimeSlotList } from '../models';
import { MapperInterface } from '@telenet/ng-lib-shared';
import * as i0 from "@angular/core";
export declare class CafeTimeSlotMapper implements MapperInterface<RawCafeTimeslotListInterface, CafeTimeSlotList> {
    toModel(rawCafeTimeSlot: RawCafeTimeslotListInterface): CafeTimeSlotList;
    private createFirstDays;
    private createTimeSlots;
    private createTimeSlot;
    static ɵfac: i0.ɵɵFactoryDeclaration<CafeTimeSlotMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CafeTimeSlotMapper>;
}
//# sourceMappingURL=timeslot.mapper.d.ts.map