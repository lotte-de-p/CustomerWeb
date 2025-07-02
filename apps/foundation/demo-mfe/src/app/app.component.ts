import { Component } from '@angular/core';
import { NavContainerComponent } from './shared';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'tg-foundation-demo-root',
  standalone: true,
  template: `
    <tg-foundation-demo-nav-container-cmp>
      <router-outlet></router-outlet>
    </tg-foundation-demo-nav-container-cmp>
  `,
  imports: [NavContainerComponent, RouterOutlet],
})
export class AppComponent {}
