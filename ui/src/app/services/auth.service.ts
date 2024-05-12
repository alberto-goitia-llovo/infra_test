import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { type Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient) {}
  login(email: string, password: string): Observable<void> {
    console.log({ email, password });
    return this.httpClient.post<undefined>('/api/auth/login', {
      email,
      password,
    });
  }
}
