import { OutdoorAppointmentModel } from '../entities/outdoor-appointment.model';
import { RawOutdoorAppointmentModel } from '../entities/raw-outdoor-appointment.model';

export class OutdoorAppointmentMapper {
  static toModel(rawOutdoorAppointmentModel: RawOutdoorAppointmentModel): OutdoorAppointmentModel {
    const outdoorAppointmentModel = new OutdoorAppointmentModel();
    outdoorAppointmentModel.locationIds = rawOutdoorAppointmentModel.locationIds;
    return outdoorAppointmentModel;
  }
}
