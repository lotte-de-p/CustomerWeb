import { MatDialogRef } from '@angular/material/dialog';
import { MobileLine, User, SimType, SimStatus } from '@sim-management/data-access';
import { SimManagementDeactivateESimDialogComponent } from './deactivate-e-sim-dialog.component';

describe('AssignDialogComponent', () => {
  let component: SimManagementDeactivateESimDialogComponent;
  let mockDialogRef: MatDialogRef<SimManagementDeactivateESimDialogComponent>;

  const mockData = {
    mobileLine: {
      name: 'Test Line',
      msisdn: '3234567890',
      identityId: 'testIdentityId',
      isSuspended: false,
      mainSimCard: {
        iccid: 'testIccid',
        pin: '1234',
        puk: '5678',
        type: SimType.PHYSICAL_SIM,
        status: SimStatus.SIM_CARD_LOST,
      },
    } as MobileLine,
    householdUsers: [
      {
        identityId: 'testUserId1',
        firstName: 'John',
        lastName: 'Doe',
        msisdn: '3234567890',
      },
      {
        identityId: 'testUserId2',
        firstName: 'Jane',
        lastName: 'Doe',
        msisdn: '3234567890',
      },
    ] as User[],
    profileManagementUrl: 'https://example.com/profile',
  };

  beforeEach(async () => {
    mockDialogRef = { close: jest.fn() } as unknown as MatDialogRef<SimManagementDeactivateESimDialogComponent>;
    mockDialogRef.close = jest.fn();

    component = new SimManagementDeactivateESimDialogComponent(
      mockDialogRef as unknown as MatDialogRef<SimManagementDeactivateESimDialogComponent>,
      mockData
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the confirm event and close the dialog when the confirm button is clicked', () => {
    component.onConfirmClick();
    expect(mockDialogRef.close).toHaveBeenCalledWith(true);
  });

  it('should close the dialog when the close button is clicked', () => {
    component.onCloseClick();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });
});
