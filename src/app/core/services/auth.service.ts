import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

interface LoginResponse { token: string }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'auth_token';
  private _isAuthenticated = new BehaviorSubject<boolean>(!!this.getToken());
  public isAuthenticated$ = this._isAuthenticated.asObservable();

  constructor(private api: ApiService) { }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.api.post<LoginResponse>('Auth/login', { email, password }).pipe(
      tap(res => {
        if (res && (res as any).token) {
          this.setToken((res as any).token);
          this._isAuthenticated.next(true);
        }
      })
    );
  }

  register(email: string, password: string) {
    return this.api.post('auth/register', { email, password });
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this._isAuthenticated.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }
}
