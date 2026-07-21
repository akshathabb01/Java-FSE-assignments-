import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  /*
    Step 67: EXPLANATION OF COMPONENT-LEVEL PROVIDING
    Providing `NotificationService` in the component decorator creates a new, distinct service instance
    scoped strictly to this component and its child hierarchy. Unlike `providedIn: 'root'`, this instance
    is NOT a global singleton and will be destroyed when this component is destroyed.
  */
  providers: [NotificationService],
  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class NotificationComponent {
  notificationMsg: string;

  constructor(private notificationService: NotificationService) {
    this.notificationMsg = this.notificationService.getMessage();
  }
}
