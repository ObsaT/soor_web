import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiService {
  private base = (window as any).__env?.API_BASE_URL?.replace(/\/+$/, '') || '';
  constructor(private http: HttpClient) {}
  private url(path: string) {
    // if base configured, use absolute base + api/ path; otherwise use relative api/
    if (this.base) return `${this.base}/api/${path}`.replace(/([^:]\/\/)/, '$1');
    return `api/${path}`;
  }
  get<T>(path: string): Observable<T> { return this.http.get<T>(this.url(path)); }
  post<T>(path: string, body: any) { return this.http.post<T>(this.url(path), body); }
  put<T>(path: string, body: any) { return this.http.put<T>(this.url(path), body); }
  delete<T>(path: string) { return this.http.delete<T>(this.url(path)); }
}
