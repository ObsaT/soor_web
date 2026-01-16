import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { EventModel } from '../models/event.model';

@Injectable({providedIn: 'root'})
export class EventService {
  constructor(private api: ApiService) {}
  all(): Observable<EventModel[]> { return this.api.get<EventModel[]>('events'); }
  get(id:number){ return this.api.get<EventModel>(`events/${id}`); }
}
