import { PlannedMaintenceImpactModel } from './planned-maintenance-impact.model';

export class PlannedMaintenanceModel {
  addressId?: string;
  startDate?: Date;
  endDate?: Date;
  today = new Date();
  isCompleted: boolean;
  isPlanned: boolean;
  isInProgress: boolean;
  impact: PlannedMaintenceImpactModel[];
  description?: { nl?: string; en?: string; fr?: string } = {};
}

export class RawPlannedMaintenanceModel extends PlannedMaintenanceModel {
  impactwindows: RawImpactWindows;
  scheduledEndDate: Date;
  scheduledStartDate: Date;
  messages: RawPlannedMessages[];
}

export class RawImpactWindows {
  impactWindowEndDate: Date;
  impactWindowStartDate: Date;
  impactWindowNr: string;
}

export class RawPlannedMessages {
  description: string;
  lang: string;
}
