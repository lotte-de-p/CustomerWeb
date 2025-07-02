import { LoginDetails } from './login-details.model';
export class LoginDetailsTestfactory {
    static build(properties) {
        const loginDetails = new LoginDetails(200);
        loginDetails.customerNumber = '12345';
        loginDetails.state = 'test_state';
        loginDetails.nonce = 'test_nonce';
        loginDetails.status = 'test_status';
        loginDetails.scopes = [];
        loginDetails.bssSystem = 'test_bss_system';
        loginDetails.identityId = '';
        loginDetails.username = 'test_user';
        loginDetails.firstName = 'test_firstname';
        loginDetails.lastName = 'test_lastname';
        loginDetails.narrowed = false;
        loginDetails.authAge = 18;
        loginDetails.isPid = false;
        loginDetails.bssSytem = 'test_bssSytem';
        loginDetails.isImpersonated = false;
        loginDetails.role = '';
        loginDetails.isExplicitLogin = false;
        loginDetails.isTelenetLogin = true;
        loginDetails.isSubLogin = false;
        loginDetails.loginAlias = 'test_login_alias';
        loginDetails.advisorId = 'adminfmc';
        if (properties) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            Object.keys(properties).forEach((key) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                loginDetails[key] = properties[key];
            });
        }
        return loginDetails;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZGV0YWlscy50ZXN0ZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWxzL2xvZ2luLWRldGFpbHMudGVzdGZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXJELE1BQU0sT0FBTyx1QkFBdUI7SUFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFvQjtRQUMvQixNQUFNLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxZQUFZLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztRQUN0QyxZQUFZLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztRQUNsQyxZQUFZLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztRQUNsQyxZQUFZLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztRQUNwQyxZQUFZLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUN6QixZQUFZLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDO1FBQzNDLFlBQVksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQzdCLFlBQVksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ3BDLFlBQVksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7UUFDMUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7UUFDeEMsWUFBWSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDOUIsWUFBWSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDMUIsWUFBWSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDM0IsWUFBWSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7UUFDeEMsWUFBWSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDcEMsWUFBWSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDdkIsWUFBWSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDckMsWUFBWSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDbkMsWUFBWSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDaEMsWUFBWSxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxZQUFZLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUVwQyxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQ2YsNkRBQTZEO1lBQzdELGFBQWE7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUN0Qyw2REFBNkQ7Z0JBQzdELGFBQWE7Z0JBQ2IsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dpbkRldGFpbHMgfSBmcm9tICcuL2xvZ2luLWRldGFpbHMubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgTG9naW5EZXRhaWxzVGVzdGZhY3Rvcnkge1xuICBzdGF0aWMgYnVpbGQocHJvcGVydGllcz86IHVua25vd24pOiBMb2dpbkRldGFpbHMge1xuICAgIGNvbnN0IGxvZ2luRGV0YWlscyA9IG5ldyBMb2dpbkRldGFpbHMoMjAwKTtcbiAgICBsb2dpbkRldGFpbHMuY3VzdG9tZXJOdW1iZXIgPSAnMTIzNDUnO1xuICAgIGxvZ2luRGV0YWlscy5zdGF0ZSA9ICd0ZXN0X3N0YXRlJztcbiAgICBsb2dpbkRldGFpbHMubm9uY2UgPSAndGVzdF9ub25jZSc7XG4gICAgbG9naW5EZXRhaWxzLnN0YXR1cyA9ICd0ZXN0X3N0YXR1cyc7XG4gICAgbG9naW5EZXRhaWxzLnNjb3BlcyA9IFtdO1xuICAgIGxvZ2luRGV0YWlscy5ic3NTeXN0ZW0gPSAndGVzdF9ic3Nfc3lzdGVtJztcbiAgICBsb2dpbkRldGFpbHMuaWRlbnRpdHlJZCA9ICcnO1xuICAgIGxvZ2luRGV0YWlscy51c2VybmFtZSA9ICd0ZXN0X3VzZXInO1xuICAgIGxvZ2luRGV0YWlscy5maXJzdE5hbWUgPSAndGVzdF9maXJzdG5hbWUnO1xuICAgIGxvZ2luRGV0YWlscy5sYXN0TmFtZSA9ICd0ZXN0X2xhc3RuYW1lJztcbiAgICBsb2dpbkRldGFpbHMubmFycm93ZWQgPSBmYWxzZTtcbiAgICBsb2dpbkRldGFpbHMuYXV0aEFnZSA9IDE4O1xuICAgIGxvZ2luRGV0YWlscy5pc1BpZCA9IGZhbHNlO1xuICAgIGxvZ2luRGV0YWlscy5ic3NTeXRlbSA9ICd0ZXN0X2Jzc1N5dGVtJztcbiAgICBsb2dpbkRldGFpbHMuaXNJbXBlcnNvbmF0ZWQgPSBmYWxzZTtcbiAgICBsb2dpbkRldGFpbHMucm9sZSA9ICcnO1xuICAgIGxvZ2luRGV0YWlscy5pc0V4cGxpY2l0TG9naW4gPSBmYWxzZTtcbiAgICBsb2dpbkRldGFpbHMuaXNUZWxlbmV0TG9naW4gPSB0cnVlO1xuICAgIGxvZ2luRGV0YWlscy5pc1N1YkxvZ2luID0gZmFsc2U7XG4gICAgbG9naW5EZXRhaWxzLmxvZ2luQWxpYXMgPSAndGVzdF9sb2dpbl9hbGlhcyc7XG4gICAgbG9naW5EZXRhaWxzLmFkdmlzb3JJZCA9ICdhZG1pbmZtYyc7XG5cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBsb2dpbkRldGFpbHNba2V5XSA9IHByb3BlcnRpZXNba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbG9naW5EZXRhaWxzO1xuICB9XG59XG4iXX0=