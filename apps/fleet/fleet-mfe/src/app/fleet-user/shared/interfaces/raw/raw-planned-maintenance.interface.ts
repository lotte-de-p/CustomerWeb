export interface RawPlannedMaintenance {
  messages: PlannedMaintenanceMessagesInterface[];
}

export interface PlannedMaintenanceMessagesInterface {
  payload: string;
  startDate: string;
  endDate: string;
}
