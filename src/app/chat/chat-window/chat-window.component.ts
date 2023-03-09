import { Component } from '@angular/core';
import { ChatMessage } from '../chat-message.model';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent {
  messages: ChatMessage[] = [];

  onMessageSent(message: string) {
    const newMessage = new ChatMessage(message, 'user', new Date());
    this.messages.push(newMessage);
  }

}
