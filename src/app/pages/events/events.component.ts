import { Component } from '@angular/core';
import { EventModel } from '../../core/models/event.model';
import { ApiService } from '../../core/services/api.service';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from '../../shared/event-card/event-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events',
  imports: [CommonModule, EventCardComponent, FormsModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  events: EventModel[] = [
    {
      id: 'e1', title: 'Addis Ababa Marathon', date: '2025-12-15', location: 'Addis Ababa, Ethiopia',
      distance: '42.195 km', image: '', description: 'Flagship marathon.', category: 'Marathon'
    },
    {
      id: 'e2', title: 'Berlin Marathon', date: '2025-09-27', location: 'Berlin, Germany',
      distance: '42.195 km', category: 'Marathon'
    },
    {
      id: 'e3', title: 'Local Half Marathon', date: '2025-08-10', location: 'Local Stadium',
      distance: '21.1 km', category: 'Half'
    }
  ];

  originalEvents: EventModel[] = [...this.events];
  filter: string = 'all';

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    // If API is used later:
    // this.api.getEvents().subscribe(list => {
    //   this.events = list;
    //   this.originalEvents = [...list];
    // });
  }

  trackById(index: number, item: EventModel) {
    return item.id;
  }

  filterEvents() {
    if (this.filter === 'all') {
      this.events = [...this.originalEvents];
      return;
    }

    this.events = this.originalEvents.filter(
      e => e.category?.toLowerCase() === this.filter.toLowerCase()
    );
  }
}