export class AppointmentsConstants {
  static APPOINTMENTS_ERROR_CAUSE_KEYS = new Map<string, string>([
    ['Availabilities-004', 'availability-does-not-exists'],
    ['Availabilities-005', 'availability-code-expired'],
    ['Availabilities-023', 'not-possible-generate-availabilities'],
    ['Availabilities-018', 'taskgroup-already-cancelled'],
    ['CBE-001', 'erp-backend-error'],
    ['ERR_USP_001', 'unexpected-system-error'],
    ['ERR_USP_058', 'unexpected-unit-t-error'],
    ['ERR_USP_069', 'given-entityid-does-not-belong-taskgroup'],
    ['ERR_USP_125', 'booking-not-allowed'],
    ['Interventions-002', 'taskgroup-has-existing-intervention'],
    ['Interventions-033', 'existing-taskgroup-reservation-expired'],
    ['Reservations-003', 'taskgroup-has-existing-reservation'],
    ['Reservations-014', 'slot-no-longer-available'],
    ['Taskgroups-005', 'update-ongoing-taskgroup-not-allowed'],
    ['Taskgroups-030', 'taskgroup-already-done-or-cancelled'],
    ['Validations-001', 'missing-required-keys'],
    ['Reservations-005', 'scheduling-appointment-failure'],
  ]);
}
