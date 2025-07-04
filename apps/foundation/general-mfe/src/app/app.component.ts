import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'tg-foundation-general-root',
  template: `<router-outlet></router-outlet>`,
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {}
