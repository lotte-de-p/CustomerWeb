import { Injectable } from '@angular/core';
import { SofyModemDetails } from '../models/sofy-modem-details';
import { SofyAddress } from '../models/sofy-address';
import * as i0 from "@angular/core";
export class SofyModemDetailsMapper {
    mapSofyModemDetails(modemDetails) {
        const sofyModemDetails = [];
        if (modemDetails) {
            modemDetails.modemDetails.forEach((modemDetail) => {
                const sofyModemDetail = new SofyModemDetails();
                sofyModemDetail.macaddress = modemDetail.macAddress;
                sofyModemDetail.cableroutername = modemDetail.cableRouterName;
                sofyModemDetail.hardware = modemDetail.hardwareType;
                sofyModemDetail.installationaddress = this.mapInstallationAddress(modemDetail.installationAddress);
                sofyModemDetail.internetlineidentifier = modemDetail.internetLineIdentifier;
                sofyModemDetail.modemtype = modemDetail.modemType;
                sofyModemDetails.push(sofyModemDetail);
            });
        }
        return sofyModemDetails;
    }
    mapInstallationAddress(address) {
        const sofyAddress = new SofyAddress();
        sofyAddress.housenr = address.houseNumber;
        sofyAddress.street = address.street;
        sofyAddress.postalcode = address.postalCode;
        sofyAddress.municipality = address.municipality;
        sofyAddress.addressid = address.addressId;
        sofyAddress.country = address.country;
        return sofyAddress;
    }
    static ɵfac = function SofyModemDetailsMapper_Factory(t) { return new (t || SofyModemDetailsMapper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SofyModemDetailsMapper, factory: SofyModemDetailsMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SofyModemDetailsMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29meS1tb2RlbS1kZXRhaWxzLm1hcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbWFwcGVycy9zb2Z5LW1vZGVtLWRldGFpbHMubWFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQU9yRCxNQUFNLE9BQU8sc0JBQXNCO0lBQzFCLG1CQUFtQixDQUFDLFlBQW1DO1FBQzVELE1BQU0sZ0JBQWdCLEdBQXVCLEVBQUUsQ0FBQztRQUNoRCxJQUFJLFlBQVksRUFBRSxDQUFDO1lBQ2pCLFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ2hELE1BQU0sZUFBZSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztnQkFFL0MsZUFBZSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDO2dCQUNwRCxlQUFlLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUM7Z0JBQzlELGVBQWUsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQztnQkFDcEQsZUFBZSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDbkcsZUFBZSxDQUFDLHNCQUFzQixHQUFHLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDNUUsZUFBZSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO2dCQUVsRCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0QsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBRU8sc0JBQXNCLENBQUMsT0FBZ0I7UUFDN0MsTUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUV0QyxXQUFXLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDMUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ3BDLFdBQVcsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUM1QyxXQUFXLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDaEQsV0FBVyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQzFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUV0QyxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO2dGQS9CVSxzQkFBc0I7Z0VBQXRCLHNCQUFzQixXQUF0QixzQkFBc0IsbUJBRnJCLE1BQU07O2lGQUVQLHNCQUFzQjtjQUhsQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb2Z5TW9kZW1EZXRhaWxzIH0gZnJvbSAnLi4vbW9kZWxzL3NvZnktbW9kZW0tZGV0YWlscyc7XG5pbXBvcnQgeyBTb2Z5QWRkcmVzcyB9IGZyb20gJy4uL21vZGVscy9zb2Z5LWFkZHJlc3MnO1xuaW1wb3J0IHsgQ2FmZU1vZGVtRGV0YWlsc01vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL2NhZmUtbW9kZW0tZGV0YWlscy5tb2RlbCc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vbW9kZWxzL2FkZHJlc3MubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU29meU1vZGVtRGV0YWlsc01hcHBlciB7XG4gIHB1YmxpYyBtYXBTb2Z5TW9kZW1EZXRhaWxzKG1vZGVtRGV0YWlsczogQ2FmZU1vZGVtRGV0YWlsc01vZGVsKTogU29meU1vZGVtRGV0YWlsc1tdIHtcbiAgICBjb25zdCBzb2Z5TW9kZW1EZXRhaWxzOiBTb2Z5TW9kZW1EZXRhaWxzW10gPSBbXTtcbiAgICBpZiAobW9kZW1EZXRhaWxzKSB7XG4gICAgICBtb2RlbURldGFpbHMubW9kZW1EZXRhaWxzLmZvckVhY2goKG1vZGVtRGV0YWlsKSA9PiB7XG4gICAgICAgIGNvbnN0IHNvZnlNb2RlbURldGFpbCA9IG5ldyBTb2Z5TW9kZW1EZXRhaWxzKCk7XG5cbiAgICAgICAgc29meU1vZGVtRGV0YWlsLm1hY2FkZHJlc3MgPSBtb2RlbURldGFpbC5tYWNBZGRyZXNzO1xuICAgICAgICBzb2Z5TW9kZW1EZXRhaWwuY2FibGVyb3V0ZXJuYW1lID0gbW9kZW1EZXRhaWwuY2FibGVSb3V0ZXJOYW1lO1xuICAgICAgICBzb2Z5TW9kZW1EZXRhaWwuaGFyZHdhcmUgPSBtb2RlbURldGFpbC5oYXJkd2FyZVR5cGU7XG4gICAgICAgIHNvZnlNb2RlbURldGFpbC5pbnN0YWxsYXRpb25hZGRyZXNzID0gdGhpcy5tYXBJbnN0YWxsYXRpb25BZGRyZXNzKG1vZGVtRGV0YWlsLmluc3RhbGxhdGlvbkFkZHJlc3MpO1xuICAgICAgICBzb2Z5TW9kZW1EZXRhaWwuaW50ZXJuZXRsaW5laWRlbnRpZmllciA9IG1vZGVtRGV0YWlsLmludGVybmV0TGluZUlkZW50aWZpZXI7XG4gICAgICAgIHNvZnlNb2RlbURldGFpbC5tb2RlbXR5cGUgPSBtb2RlbURldGFpbC5tb2RlbVR5cGU7XG5cbiAgICAgICAgc29meU1vZGVtRGV0YWlscy5wdXNoKHNvZnlNb2RlbURldGFpbCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHNvZnlNb2RlbURldGFpbHM7XG4gIH1cblxuICBwcml2YXRlIG1hcEluc3RhbGxhdGlvbkFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IFNvZnlBZGRyZXNzIHtcbiAgICBjb25zdCBzb2Z5QWRkcmVzcyA9IG5ldyBTb2Z5QWRkcmVzcygpO1xuXG4gICAgc29meUFkZHJlc3MuaG91c2VuciA9IGFkZHJlc3MuaG91c2VOdW1iZXI7XG4gICAgc29meUFkZHJlc3Muc3RyZWV0ID0gYWRkcmVzcy5zdHJlZXQ7XG4gICAgc29meUFkZHJlc3MucG9zdGFsY29kZSA9IGFkZHJlc3MucG9zdGFsQ29kZTtcbiAgICBzb2Z5QWRkcmVzcy5tdW5pY2lwYWxpdHkgPSBhZGRyZXNzLm11bmljaXBhbGl0eTtcbiAgICBzb2Z5QWRkcmVzcy5hZGRyZXNzaWQgPSBhZGRyZXNzLmFkZHJlc3NJZDtcbiAgICBzb2Z5QWRkcmVzcy5jb3VudHJ5ID0gYWRkcmVzcy5jb3VudHJ5O1xuXG4gICAgcmV0dXJuIHNvZnlBZGRyZXNzO1xuICB9XG59XG4iXX0=