import { Component } from '@angular/core';
import { ImageSrcInterceptorDirective } from './shared/image-src-interceptor/image-src-interceptor.directive';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'tg-marketing-root',
  template: `
    <div class="container">
      <div class="logo ">
        <img [src]="'telenet-logo.png'" alt="telenet-logo" />
      </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/roaming-international-rates">Roaming and Internation Rates</a>
            </li>
            <li class="nav-item"><a class="nav-link" routerLink="/cafe/pricing">Pricing</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/cafe/wink-pricing">Wink Pricing</a></li>
          </ul>
        </div>
      </nav>
      <div class="my-4">
        <h2>Component</h2>
        <div class="card">
          <div class="card-body">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [RouterLink, RouterOutlet, ImageSrcInterceptorDirective],
})
export class AppComponent {}
