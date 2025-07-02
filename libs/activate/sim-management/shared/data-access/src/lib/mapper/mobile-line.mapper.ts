import { MobileLine } from '../entities/mobile-line.interface';
import { RawMobileLine } from '../entities/raw/raw-mobile-line.interface';
import { SimStatus } from '../enums/sim-status.enum';

export class MobileLineMapper {
  toModel(raw: RawMobileLine): MobileLine {
    const mainSimCard = raw.simCards.find((simCard) => simCard.status !== SimStatus.ACTIVATION_IN_PROGRESS);
    const pendingSimCard = raw.simCards.find((simCard) => simCard.status === SimStatus.ACTIVATION_IN_PROGRESS);

    return {
      name: raw.name,
      tariffPlan: raw.tariffPlan,
      isDataOnlyPlan: raw.dataOnly,
      msisdn: raw.msisdn,
      isSuspended: raw.suspended,
      identityId: raw.identityId,
      status: raw.status,
      isESimSmartWatchAvailable: raw.eSimAvailable,
      isPorting: raw.isPorting,
      isPortingDetailsProvided: raw.isPortingDetailsProvided,
      mainSimCard: mainSimCard
        ? {
            iccid: mainSimCard.iccid,
            pin: mainSimCard.pin,
            puk: mainSimCard.puk,
            type: mainSimCard.type,
            status: mainSimCard.status,
            eSimProfileData: mainSimCard.eSimProfileData,
          }
        : null,
      pendingSimCard: pendingSimCard
        ? {
            iccid: pendingSimCard.iccid,
            pin: pendingSimCard.pin,
            puk: pendingSimCard.puk,
            type: pendingSimCard.type,
            status: pendingSimCard.status,
            eSimProfileData: pendingSimCard.eSimProfileData,
          }
        : null,
    };
  }
}
