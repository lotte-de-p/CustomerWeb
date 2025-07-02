import { FleetProfileMapper } from './fleet-profile-mapper';
import { FleetProfile } from '../../interfaces/profile/fleet-profile.interface';
import { expect } from '@jest/globals';

describe('FleetProfileMapper', () => {
  let mapper: FleetProfileMapper;
  let rawProfileDetails: any;

  beforeEach(() => {
    rawProfileDetails = {
      firstName: 'firstName',
      lastName: 'lastName',
      birthDate: '1/1/1',
      language: 'en',
      gender: 'M',
      email: 'unit@test.com',
      phone: '00000000000',
      employeeCustomerNumber: '123',
      status: 'active',
    };

    mapper = new FleetProfileMapper();
  });

  function verifyFleetProfile(fleetProfileWithDetails: FleetProfile) {
    expect(fleetProfileWithDetails.firstname).toBe('firstName');
    expect(fleetProfileWithDetails.lastname).toBe('lastName');
    expect(fleetProfileWithDetails.birthdate).toBe('1/1/1');
    expect(fleetProfileWithDetails.language).toBe('en');
    expect(fleetProfileWithDetails.gender).toBe('M');
    expect(fleetProfileWithDetails.email).toBe('unit@test.com');
    expect(fleetProfileWithDetails.phonenumber).toBe('00000000000');
    expect(fleetProfileWithDetails.employeeCustomerNumber).toBe('123');
    expect(fleetProfileWithDetails.status).toBe('active');
    expect(fleetProfileWithDetails.success).toBe(true);
    expect(fleetProfileWithDetails.identityid).toBe(undefined);
  }

  function verifyEmptyFleetrofile(fleetProfileWithDetails: FleetProfile) {
    expect(fleetProfileWithDetails.firstname).toBeUndefined();
    expect(fleetProfileWithDetails.lastname).toBeUndefined();
    expect(fleetProfileWithDetails.birthdate).toBeUndefined();
    expect(fleetProfileWithDetails.language).toBeUndefined();
    expect(fleetProfileWithDetails.gender).toBeUndefined();
    expect(fleetProfileWithDetails.email).toBeUndefined();
    expect(fleetProfileWithDetails.phonenumber).toBeUndefined();
    expect(fleetProfileWithDetails.employeeCustomerNumber).toBeUndefined();
    expect(fleetProfileWithDetails.status).toBeUndefined();
    expect(fleetProfileWithDetails.success).toBeTruthy();
    expect(fleetProfileWithDetails.identityid).toBeUndefined();
  }

  it('should create an instance', () => {
    expect(new FleetProfileMapper()).toBeTruthy();
  });

  it('should create an empty fleet profile', () => {
    const emptyFleetProfile = mapper.createProfileDetails({});
    verifyEmptyFleetrofile(emptyFleetProfile);
  });

  it('should create a fleet profile with details', () => {
    const fleetProfileWithDetails = mapper.createProfileDetails(rawProfileDetails);
    verifyFleetProfile(fleetProfileWithDetails);
  });

  it('should map a response to a fleet profile object', () => {
    const fleetProfile = mapper.toModel(rawProfileDetails);
    verifyFleetProfile(fleetProfile);
  });
});
