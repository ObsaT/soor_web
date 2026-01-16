import { Component } from '@angular/core';
import { AthleteService } from '../../core/services/athlete.service';
import { EventService } from '../../core/services/event.service';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, DatePipe, RouterModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AthleteService, EventService]
})
export class HomeComponent {
   athletes = [
      { id: 1, name: 'John Doe', discipline: 'Sprinter', country: 'Ethiopia', photoUrl: 'assets/ath1.jpg', personalBest: '9.89s' },
      { id: 2, name: 'Jane Doe', discipline: 'Marathoner', country: 'Kenya', photoUrl: 'assets/ath2.jpg', personalBest: '2:21:45' },
      { id: 3, name: 'Mike Smith', discipline: 'Long Jumper', country: 'USA', photoUrl: 'assets/ath3.jpg' }
    ];
 events = [
      { id: 1, title: 'Addis Ababa Marathon', date: '2025-12-15T08:00:00Z', location: 'Addis Ababa, Ethiopia', image: 'assets/event1.jpg', category: 'Marathon'},
      { id: 2, title: 'Berlin Marathon', date: '2025-09-27T08:00:00Z', location: 'Berlin, Germany', image: 'assets/event2.jpg', category: 'Marathon'}
    ];
  constructor(private athleteSvc: AthleteService, private eventSvc: EventService) {}

  ngOnInit() {
    // this.athleteSvc.getAthletes().subscribe(x => this.athletes = x);
    // this.eventSvc.all().subscribe(e => this.events = e);
  }
}
