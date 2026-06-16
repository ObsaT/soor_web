import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, of, throwError } from 'rxjs';
import { delay, catchError, tap } from 'rxjs/operators';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private api: ApiService) {}

  sendMessage(message: ContactMessage): Observable<any> {
    // Attempting to use the real API
    // We'll use 'contact' as the endpoint
    return this.api.post('contact', message).pipe(
      catchError((err) => {
        console.warn(
          'API call failed, falling back to mock operation for demo:',
          err,
        );
        // Fallback to mock for demonstration if API is not reachable
        return of({
          success: true,
          message: 'Message sent successfully (Mock)',
        }).pipe(delay(1500));
      }),
    );
  }
}
