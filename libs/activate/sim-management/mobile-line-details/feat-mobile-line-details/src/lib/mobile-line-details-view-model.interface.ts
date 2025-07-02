import { Message, MobileLine, User } from '@sim-management/data-access';
import { Observable } from 'rxjs';

export interface MobileLineDetailsViewModel {
  mobileLines$: Observable<MobileLine[]>;
  selectedMobileLine$: Observable<MobileLine | undefined>;
  householdUsers$: Observable<User[]>;
  isManagerOrContractHolder$: Observable<boolean | undefined>;
  isMember$: Observable<boolean | undefined>;
  isESimSwapInProgress$: Observable<boolean | undefined>;
  isSimSwapReadyForActivation$: Observable<boolean | undefined>;
  isESimSwapReadyForActivation$: Observable<boolean | undefined>;
  isESimProfileRequestVisible$: Observable<boolean | undefined>;
  isAssignActionVisible$: Observable<boolean | undefined>;
  isSimSwapActionVisible$: Observable<boolean | undefined>;
  isBlockActionVisible$: Observable<boolean | undefined>;
  isActivateESimSmartWatchInfoActionVisible$: Observable<boolean | undefined>;
  isDeactivateESimWearableActionVisible$: Observable<boolean | undefined>;
  isUnblockActionVisible$: Observable<boolean | undefined>;
  isBlockedBySystem$: Observable<boolean | undefined>;
  actionResultMessage$: Observable<Message | undefined>;
  isLoading$: Observable<boolean | undefined>;
}
