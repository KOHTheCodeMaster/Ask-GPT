export class ChatMessage {
  id: string;
  content: string;
  sentBy: string;
  timestamp: Date;

  constructor(content: string, sentBy: string, timestamp: Date) {
    this.id = '';
    this.content = content;
    this.sentBy = sentBy;
    this.timestamp = timestamp;
  }
}
