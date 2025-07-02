import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { ImageSrcInterceptorDirective } from '@profile-management/util';

@Component({
  standalone: true,
  templateUrl: './pm-profile-icon.component.html',
  selector: 'tg-pm-profile-icon',
  imports: [ImageSrcInterceptorDirective, NgOptimizedImage],
})
export class PmProfileIconComponent {
  hasProfilePicture = input.required<boolean>();
  profilePictureUrl = input.required<string>();
  isBaseCustomer = input.required<boolean>();
}
