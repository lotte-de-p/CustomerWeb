import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'care-service-case-loader',
  templateUrl: './loader.component.html',
})
export class LoaderComponent {
  @Input() loading: boolean;
}
