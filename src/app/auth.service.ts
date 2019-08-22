import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UserDetails {
  success: boolean;
  message: string;
}

interface RegisterResponse {
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  getUserDetails(username, password) {
    // post these details to API server return user info if corrent
    return this.http.post<UserDetails>('/api/auth.php', {
      username,
      password
    });
  }

  registerUser(username, password) {
    return this.http.post<RegisterResponse>('/api/register', {
      username,
      password
    });
  }
}
