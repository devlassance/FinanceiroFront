import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuth } from '../interfaces/user-auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API = 'http://localhost:8080/users/getIdByNick'
  constructor(private http: HttpClient){
  }

  login(userAuth: UserAuth) : Observable<any>{
      return this.http.post<UserAuth>(this.API, userAuth)
  }

}
