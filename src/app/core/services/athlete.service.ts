import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Athlete } from '../models/athlete.model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AthleteService {
  constructor(private api: ApiService) {}
  getAthletes(): Observable<Athlete[]> { return this.api.get<Athlete[]>('athletes'); }
  get(id: number) { return this.api.get<Athlete>(`athletes/${id}`); }
  add(athlete: Athlete) { return this.api.post('athletes', athlete); }
  update(athlete: Athlete) { return this.api.put(`athletes/${athlete.id}`, athlete); }
}
