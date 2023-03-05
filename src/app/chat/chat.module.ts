import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatService } from './chat.service';
import { ChatComponent } from './chat.component';


@NgModule({
  declarations: [
    ChatWindowComponent,
    ChatInputComponent,
    ChatComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ChatService],
  exports: [ChatWindowComponent, ChatInputComponent, ChatComponent],
})
export class ChatModule { }
