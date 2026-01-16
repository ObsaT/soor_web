import { Component } from '@angular/core';
import { AthleteService } from '../../core/services/athlete.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-athletes',
  imports: [CommonModule, FormsModule],
  templateUrl: './athletes.component.html',
  styleUrl: './athletes.component.css',
  providers: [AthleteService]
})
export class AthletesComponent {
  name = '' 
  athletes = [
      { id: 1, name: 'John Doe', discipline: 'Sprinter', country: 'Ethiopia', photoUrl: 'assets/ath1.jpg', personalBest: '9.89s' },
      { id: 2, name: 'Jane Doe', discipline: 'Marathoner', country: 'Kenya', photoUrl: 'assets/ath2.jpg', personalBest: '2:21:45' },
      { id: 3, name: 'Mike Smith', discipline: 'Long Jumper', country: 'USA', photoUrl: 'assets/ath3.jpg' }
    ];
  originalAthletes = [...this.athletes];
  constructor(private athleteSvc: AthleteService) {}
  ngOnInit(){
    
    }
    search(){
      if(this.name.trim().length === 0){
        // reset to original list if search is empty
        this.athletes = [...this.originalAthletes];
        return;
      } 
      const term = this.name.trim().toLowerCase();
      this.athletes = this.athletes.some(a => a.name.toLowerCase().includes(term))
        ? this.athletes.filter(a => a.name.toLowerCase().includes(term))
        : [];
    }
}
