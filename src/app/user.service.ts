import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface MyData {
  email: string;
  status: boolean;
  quote: string;
}

interface QuoteStatus {
  success: boolean;
}

interface IsLoggedIn {
  status: boolean;
}

interface LogoutStatus {
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<MyData>('/api/data');
  }

  updateQuote(value) {
    return this.http.post<QuoteStatus>('/api/quote/', {value});
  }

  isLoggedIn(): Observable<IsLoggedIn> {
    return this.http.get<IsLoggedIn>('/api/isloggedin');
  }

  logout() {
    return this.http.get<LogoutStatus>('/api/logout');
  }
}
