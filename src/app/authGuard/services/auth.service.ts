import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest, LoginResponse} from "../models/login.models";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

const BACKEND_LINK = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(BACKEND_LINK + '/api/auth/login', loginRequest).pipe(
      map(user => {
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user.token));
            localStorage.setItem('currentUserWithRefreshToken', JSON.stringify(user.refreshToken));
          }
          return user;
        }
      )
    );
  }
}
