import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ImageSrcInterceptorDirective } from '@sales/shared/util';

@Component({
  selector: 'tg-sales-customer-registration-navs-overlay',
  standalone: true,
  imports: [CommonModule, TranslateModule, ImageSrcInterceptorDirective],
  templateUrl: './navs-overlay.component.html',
})
export class NavsOverlayComponent {
  @Input() pointOfSalesUrl: string | null = '';
  @Input() requestHelpUrl: string | null = '';
  @Input() brand: string | null = '';
}
