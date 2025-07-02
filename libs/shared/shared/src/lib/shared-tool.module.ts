import { NgModule } from '@angular/core';
import { WindowService } from './window/window.service';
import { LogFactory } from './debug/log.factory';
import { DomService } from './dom/dom-service/dom-service';
import { CircularPlayerModule } from './ui/circular-audio-player';

@NgModule({
  imports: [CircularPlayerModule],
  providers: [WindowService, LogFactory, DomService],
  exports: [CircularPlayerModule],
})
export class SharedToolModule {}
