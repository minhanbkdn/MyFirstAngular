import {Component, OnInit} from '@angular/core';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.css']
})
export class ListMessageComponent implements OnInit {
  messages: string[];

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.messages = this.messageService.message;
  }

  deleteAllData(): void {
    this.messages = [];
    this.messageService.deleteMessage();
  }
}
