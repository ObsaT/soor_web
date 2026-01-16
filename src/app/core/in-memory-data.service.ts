import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const athletes = [
      { id: 1, name: 'John Doe', discipline: 'Sprinter', country: 'Ethiopia', photoUrl: 'assets/ath1.jpg', personalBest: '9.89s' },
      { id: 2, name: 'Jane Doe', discipline: 'Marathoner', country: 'Kenya', photoUrl: 'assets/ath2.jpg', personalBest: '2:21:45' },
      { id: 3, name: 'Mike Smith', discipline: 'Long Jumper', country: 'USA', photoUrl: 'assets/ath3.jpg' }
    ];

    const events = [
      { id: 1, title: 'Addis Ababa Marathon', date: '2025-12-15T08:00:00Z', location: 'Addis Ababa, Ethiopia', image: 'assets/event1.jpg', category: 'Marathon'},
      { id: 2, title: 'Berlin Marathon', date: '2025-09-27T08:00:00Z', location: 'Berlin, Germany', image: 'assets/event2.jpg', category: 'Marathon'}
    ];

    const products = [
      { id:1, title: 'Event T-Shirt', price: 12.99, image: 'assets/shirt.jpg' },
      { id:2, title: 'Running Cap', price: 8.99, image: 'assets/cap.jpg' }
    ];

    return { athletes, events, products };
  }

  // optional genId helpers...
}
  