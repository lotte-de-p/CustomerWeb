import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tg-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [RouterLink],
})
export class HeaderComponent {}
