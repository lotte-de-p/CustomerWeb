import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'tg-profile-management',
  templateUrl: './profile-management.component.html',
  standalone: true,
  imports: [RouterOutlet],
})
export class ProfileManagementComponent {
  title = 'profile-management-mfe';
}
