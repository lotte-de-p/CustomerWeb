import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { Component } from '@angular/core';
import {
  WinkAvatar,
  WinkButton,
  WinkCustomerOrientation,
  WinkDropdownMenu,
  WinkFlyout,
  WinkGlobalHeader,
  WinkIcon,
  WinkImg,
  WinkInput,
  WinkIntentBar,
  WinkLink,
  WinkLogo,
  WinkMainNavigation,
  WinkNavigationList,
  WinkNavigationListItem,
  WinkStack,
} from '@telenet/wink-ng';

@Component({
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkWithHref,
    AsyncPipe,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    WinkAvatar,
    WinkButton,
    WinkCustomerOrientation,
    WinkDropdownMenu,
    WinkFlyout,
    WinkGlobalHeader,
    WinkIcon,
    WinkImg,
    WinkInput,
    WinkIntentBar,
    WinkLink,
    WinkLogo,
    WinkMainNavigation,
    WinkNavigationList,
    WinkNavigationListItem,
    WinkStack,
  ],
  selector: 'tg-foundation-demo-nav-container-cmp',
  templateUrl: './nav-container.component.html',
  styleUrls: ['./nav-container.component.css'],
})
export class NavContainerComponent {}
