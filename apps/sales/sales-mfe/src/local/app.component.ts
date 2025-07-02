import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsDetailsOrderComponent } from '@sales/products-details/feat-products-details';

@Component({
  selector: 'tg-sales-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, ProductsDetailsOrderComponent],
})
export class AppComponent {
  title = 'sales-mfe';
}
