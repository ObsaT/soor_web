import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(private http: HttpClient) {}
  get<T>(path: string): Observable<T> { return this.http.get<T>(`api/${path}`); }
  post<T>(path: string, body: any) { return this.http.post<T>(`api/${path}`, body); }
  put<T>(path: string, body: any) { return this.http.put<T>(`api/${path}`, body); }
  delete<T>(path: string) { return this.http.delete<T>(`api/${path}`); }
}
