import { CafeTimeSlotList, CallexcellTimeslotResponse } from '../models';
import { MapperInterface } from '@telenet/ng-lib-shared';
import * as i0 from "@angular/core";
export declare class CallexcellTimeslotMapper implements MapperInterface<CallexcellTimeslotResponse, CafeTimeSlotList> {
    toModel(rawData: CallexcellTimeslotResponse): CafeTimeSlotList;
    private createCallExcellTimeslots;
    private createTimeslotMomentObject;
    private getEnabledTimeslots;
    static ɵfac: i0.ɵɵFactoryDeclaration<CallexcellTimeslotMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CallexcellTimeslotMapper>;
}
//# sourceMappingURL=callexcell-timeslot.mapper.d.ts.map