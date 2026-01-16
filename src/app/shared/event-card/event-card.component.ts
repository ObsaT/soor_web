import { Component, Input } from '@angular/core';
import { EventModel } from '../../core/models/event.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-card',
  imports: [DatePipe],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  @Input() event!: EventModel;
}
