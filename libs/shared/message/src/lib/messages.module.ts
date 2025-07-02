import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MessageComponent } from './message/message.component';
import { MessageFlowComponent } from './message/message-flow.component';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [MessageComponent, MessageFlowComponent],
  exports: [MessageComponent, MessageFlowComponent],
  providers: [TranslateService],
})
export class MessagesModule {}
