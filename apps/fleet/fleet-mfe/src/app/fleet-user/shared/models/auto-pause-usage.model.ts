import { LimitInterface } from '../interfaces/mobile-auto-pause.interface';

export class AutoPauseUsageModel {
  id: string;
  limit: LimitInterface;

  isAutopauseEnabled(): boolean {
    return this.limit && this.limit.enabled;
  }

  isUsageWithinLimit(): boolean {
    return this.isAutopauseEnabled() && Number(this.limit.value) > Number(this.limit.currentUsage);
  }

  isUsageLimitReached(): boolean {
    return this.isAutopauseEnabled() && Number(this.limit.value) <= Number(this.limit.currentUsage);
  }
}
