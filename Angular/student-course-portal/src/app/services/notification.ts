import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  private instanceId = Math.floor(Math.random() * 10000);

  getMessage(): string {
    return `Scoped Notification Instance ID: #${this.instanceId}`;
  }
}
