import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(email: string, password: string): Observable<UserModel>{
    return this.http.post<UserModel>(`${'http://localhost:3000/Userlistlogin'}`, { email, password })

  }
}
