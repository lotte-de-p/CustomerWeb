import { Component } from '@angular/core';
import { WinkPricing } from '@telenet/wink-ng';
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [WinkPricing],
})
export class AppComponent {
  title = 'wink';
}
