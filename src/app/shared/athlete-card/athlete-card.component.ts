import { Component, Input } from '@angular/core';
import { Athlete } from '../../core/models/athlete.model';

@Component({
  selector: 'app-athlete-card',
  imports: [],
  templateUrl: './athlete-card.component.html',
  styleUrl: './athlete-card.component.css'
})
export class AthleteCardComponent {
@Input() athlete!: Athlete
}
