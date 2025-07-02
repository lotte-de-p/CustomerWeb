import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'tg-product-journey',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
})
export class AppComponent {
  title = 'product-journey-mfe';

  constructor(translateService: TranslateService) {
    translateService.use('nl');
  }
}
