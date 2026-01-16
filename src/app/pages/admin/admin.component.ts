import { Component } from '@angular/core';
import { EventModel } from '../../core/models/event.model';
import { ApiService } from '../../core/services/api.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, DatePipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
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

constructor(private api: ApiService) {}


ngOnInit(): void {
// this.api.getEvents().subscribe(e => this.events = e);
}


deleteEvent(id: string) {
this.events = this.events.filter(x => x.id !== id);
}}