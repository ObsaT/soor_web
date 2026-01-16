import { Component } from '@angular/core';
import { AthleteService } from '../../core/services/athlete.service';
import { AthletsListComponent } from '../athlets/athlets-list/athlets-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Athlete } from '../../core/models/athlete.model';

@Component({
  selector: 'app-athletes',
  standalone: true,
  imports: [CommonModule, FormsModule, AthletsListComponent],
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.css'],
  providers: [AthleteService]
})
export class AthletesComponent {
  name = '';
  athletes: Athlete[] = [];
  editing: Athlete | null = null;
  form: Partial<Athlete> = {};
  showModal = false;

  constructor(private athleteSvc: AthleteService) {}

  ngOnInit(){
    this.load();
  }

  load(){
    this.athleteSvc.getAthletes().subscribe({next: (x) => this.athletes = x, error: (e) => console.error(e)});
  }

  search(){
    if(this.name.trim().length === 0){ this.load(); return; }
    const term = this.name.trim().toLowerCase();
    this.athletes = this.athletes.filter(a => a.name.toLowerCase().includes(term));
  }

  startAdd(){ this.editing = null; this.form = {}; }

  startEdit(a: Athlete){ this.editing = a; this.form = { ...a }; }

  save(){
    if(this.editing){
      const updated: Athlete = { ...(this.editing as Athlete), ...(this.form as Athlete) };
      this.athleteSvc.update(updated).subscribe({next: () => this.load(), error: e => alert('Update failed')});
    } else {
      this.athleteSvc.add(this.form as Athlete).subscribe({next: () => this.load(), error: e => alert('Create failed')});
    }
    this.form = {};
    this.editing = null;
    this.showModal = false;
  }

  delete(a: Athlete){
    if(!confirm(`Delete ${a.name}?`)) return;
    this.athleteSvc.delete(a.id).subscribe({next: () => this.load(), error: () => alert('Delete failed')});
  }

  openAdd(){ this.startAdd(); this.showModal = true; }
  openEdit(a: Athlete){ this.startEdit(a); this.showModal = true; }
  closeModal(){ this.form = {}; this.editing = null; this.showModal = false; }
}
