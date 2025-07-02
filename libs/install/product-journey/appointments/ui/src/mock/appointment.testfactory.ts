export class AppointmentTestFactory {
  static getOpenAppointmentsMock() {
    return [
      {
        appointmentId: 'TI_1518555414_20230731_112499',
        appointmentType: 'INSTALL',
        appointmentSubType: '',
        appointmentStatus: 'NEW',
        appointmentDate: '2023-10-12',
        cableAppointment: false,
        fiberAppointment: false,
        salesOrderId: '9167375606013226000',
        cost: '102.8500',
        productsInfo: [
          {
            name: 'All Internet',
          },
        ],
        installationDateAtNewAddress: '2023-09-05T22:00:00Z',
        customer: {
          contactName: 'Test Romeijnder',
          language: 'NL',
          notificationMethod: 'EMAIL',
          notificationContact: 'test@info.be',
        },
        timeSlot: {
          periodOfDay: 'MI',
          startTime: '10:00',
          endTime: '14:30',
        },
        address: {
          street: 'Pareipoelstrt',
          houseNumber: '126',
          boxNumber: '',
          zip: '2800',
          city: 'Mechelen',
          countryCode: 'BE',
          country: 'België',
        },
        isUpcomingAppointment: true,
        getDisplayStatus: 'SCHEDULED',
        isNewAppointment: false,
        isCompletedOrCancelledAppointment: false,
        isScheduledAppointment: false,
        isRepairAppointment: false,
      },
      {
        appointmentId: 'TI_1518555414_20230731_112415',
        appointmentType: 'MOVE',
        appointmentSubType: '',
        appointmentStatus: 'NEW',
        appointmentDate: '2023-10-10',
        cableAppointment: false,
        fiberAppointment: false,
        salesOrderId: '9167375606013226000',
        cost: '102.8500',
        productsInfo: [
          {
            name: 'Internet',
          },
        ],
        installationDateAtNewAddress: '',
        customer: {
          contactName: 'Lucas',
          language: 'NL',
          notificationMethod: 'SMS',
          notificationContact: '0465198787',
        },
        timeSlot: {},
        address: {
          locationId: '9169507398513822922',
          street: 'Pareipoelstraat',
          houseNumber: '12',
          boxNumber: '',
          zip: '2800',
          city: 'Mechelen',
          countryCode: 'BE',
          country: 'België',
        },
        isUpcomingAppointment: true,
        getDisplayStatus: 'NEW',
        isNewAppointment: true,
        isCompletedOrCancelledAppointment: false,
        isScheduledAppointment: false,
        isRepairAppointment: false,
      },
    ];
  }

  static getCompletedAppointmentsMock() {
    return [
      {
        appointmentId: 'TR_1202416140_20231024_150812',
        appointmentType: 'REPAIR',
        appointmentSubType: 'Repair',
        appointmentStatus: 'COMPLETED',
        appointmentDate: '2023-10-24',
        cableAppointment: false,
        fiberAppointment: false,
        salesOrderId: '9168107526013142062',
        cost: '',
        productsInfo: [],
        installationDateAtNewAddress: '',
        customer: {
          contactName: 'Mr. Raphael Bakhuizen',
          language: 'EN',
          notificationMethod: 'SMS',
          notificationContact: '0452458456',
        },
        timeSlot: {
          periodOfDay: 'PM',
          startTime: '12:30',
          endTime: '18:00',
        },
        address: {
          street: 'Bleekstraat',
          houseNumber: '12',
          boxNumber: '',
          zip: '2800',
          city: 'Mechelen',
          countryCode: 'BE',
          country: 'België',
        },
        isUpcomingAppointment: false,
        getDisplayStatus: 'COMPLETED',
        isNewAppointment: false,
        isCompletedOrCancelledAppointment: true,
        isScheduledAppointment: false,
        isRepairAppointment: true,
      },
    ];
  }

  static getSelectedAppointmentWithStatus(status: string) {
    const selectedAppointment = this.getSelectedAppointment();
    selectedAppointment.appointmentStatus = status;
    return selectedAppointment;
  }

  static getSelectedAppointment() {
    return {
      appointmentId: 'TI_1518555414_20230731_112499',
      appointmentType: 'REPAIR',
      appointmentSubType: 'repair',
      appointmentStatus: 'NEW',
      appointmentDate: '2023-10-12',
      cableAppointment: false,
      fiberAppointment: false,
      salesOrderId: '9167375606013226000',
      cost: '102.8500',
      productsInfo: [
        {
          name: 'All Internet',
        },
      ],
      installationDateAtNewAddress: '2023-09-05T22:00:00Z',
      customer: {
        contactName: 'Test Romeijnder',
        language: 'NL',
        notificationMethod: 'EMAIL',
        notificationContact: 'test@info.be',
      },
      timeSlot: {
        periodOfDay: 'MI',
        startTime: '10:00',
        endTime: '14:30',
      },
      address: {
        locationId: '9169507398513822922',
        street: 'Pareipoelstrt',
        houseNumber: '126',
        boxNumber: '',
        zip: '2800',
        city: 'Mechelen',
        countryCode: 'BE',
        country: 'België',
      },
      isUpcomingAppointment: true,
      getDisplayStatus: 'SCHEDULED',
      isNewAppointment: false,
      isCompletedOrCancelledAppointment: false,
      isScheduledAppointment: false,
      isRepairAppointment: true,
    };
  }

  static outdoorAppointment() {
    return {
      locationIds: ['9169507398513822922'],
    };
  }
}
