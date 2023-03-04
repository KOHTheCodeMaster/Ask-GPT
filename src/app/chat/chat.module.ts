import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWindowComponent } from '../chat-window/chat-window.component';
import { ChatInputComponent } from '../chat-input/chat-input.component';



@NgModule({
  declarations: [
    ChatWindowComponent,
    ChatInputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
