import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string[];

  getMessage(msg: string): void {
    this.message.push(msg);
  }

  deleteMessage(): void {
    this.message = [];
  }

  constructor() {
    this.message = [];
  }
}
