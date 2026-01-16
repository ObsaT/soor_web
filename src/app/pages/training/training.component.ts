import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-training',
  imports: [CommonModule, FormsModule],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {
  programs: any[] = [];
  levelFilter: string = 'all';

  originalPrograms: any[] = [];
  ngOnInit(): void {
    this.programs = [
      { id: 'p1', title: 'Marathon Beginner', level: 'Beginner', duration: '12 weeks', description: 'Build base mileage.' },
      { id: 'p2', title: 'Half Marathon Plan', level: 'Intermediate', duration: '8 weeks', description: 'Speed and endurance.' },
      { id: 'p3', title: 'Speed Work', level: 'Pro', duration: '6 weeks', description: 'Intervals and tempo.' }
    ];
    this.originalPrograms = [...this.programs];
  }
  filter() {
   if (this.levelFilter === 'all') {
    this.programs = [...this.originalPrograms];
    return;
   }
   this.programs = this.programs.filter(p => this.levelFilter === 'all' || p.level === this.levelFilter);
  }
}
