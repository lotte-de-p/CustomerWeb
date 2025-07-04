import { Validators } from '@angular/forms';
import { RegexConstants } from '../constants';
export class CompanyNameValidator extends Validators {
    static validCompanyName(control) {
        return RegexConstants.COMPANY_REGEX.test(control.value)
            ? null
            : {
                invalidCompanyName: true,
            };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS1uYW1lLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWxpZGF0b3JzL2NvbXBhbnktbmFtZS52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFtQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTlDLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxVQUFVO0lBQ2xELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUF3QjtRQUM5QyxPQUFPLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDckQsQ0FBQyxDQUFDLElBQUk7WUFDTixDQUFDLENBQUM7Z0JBQ0Usa0JBQWtCLEVBQUUsSUFBSTthQUN6QixDQUFDO0lBQ1IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmVnZXhDb25zdGFudHMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgQ29tcGFueU5hbWVWYWxpZGF0b3IgZXh0ZW5kcyBWYWxpZGF0b3JzIHtcbiAgc3RhdGljIHZhbGlkQ29tcGFueU5hbWUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG4gICAgcmV0dXJuIFJlZ2V4Q29uc3RhbnRzLkNPTVBBTllfUkVHRVgudGVzdChjb250cm9sLnZhbHVlKVxuICAgICAgPyBudWxsXG4gICAgICA6IHtcbiAgICAgICAgICBpbnZhbGlkQ29tcGFueU5hbWU6IHRydWUsXG4gICAgICAgIH07XG4gIH1cbn1cbiJdfQ==