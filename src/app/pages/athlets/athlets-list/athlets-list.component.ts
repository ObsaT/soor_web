import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Athlete } from '../../../core/models/athlete.model';
import { AthleteService } from '../../../core/services/athlete.service';
import { AthletsFormComponent } from '../athlets-form/athlets-form.component';

@Component({
  selector: 'app-athlets-list',
  standalone: true,
  imports: [CommonModule, AthletsFormComponent],
  templateUrl: './athlets-list.component.html',
  styleUrls: ['./athlets-list.component.css']
})
export class AthletsListComponent {
  athletes: Athlete[] = [];
  selected: Partial<Athlete> | null = null;
  showModal = false;

  constructor(private athleteSvc: AthleteService) {}

  ngOnInit(){ this.load(); }

  load(){ this.athleteSvc.getAthletes().subscribe({next: x => this.athletes = x, error: e => console.error(e)}); }

  add(){ this.selected = null; this.showModal = true; }

  edit(a: Athlete){ this.selected = a; this.showModal = true; }

  remove(a: Athlete){ if(!confirm(`Delete ${a.name}?`)) return; this.athleteSvc.delete(a.id).subscribe({next: () => this.load(), error: () => alert('Delete failed')}); }

  onSubmit(model: Partial<Athlete>){
    if(this.selected && this.selected.id){
      const updated: Athlete = { ...(this.selected as Athlete), ...(model as Athlete) };
      this.athleteSvc.update(updated).subscribe({next: () => this.afterSave(), error: () => alert('Update failed')});
    } else {
      this.athleteSvc.add(model as Athlete).subscribe({next: () => this.afterSave(), error: () => alert('Create failed')});
    }
  }

  afterSave(){ this.showModal = false; this.selected = null; this.load(); }

  onCancel(){ this.showModal = false; this.selected = null; }
}
