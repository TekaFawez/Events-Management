// Fawez TEKA
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.


import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";




@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient){ }
  public getAllUsers(): Observable<UserModel[]>{
    return this.http.get<any>("http://localhost:2000/api/v1/users")
   }
   public getUser(UserId: string): Observable<UserModel> {
     return this.http.get<UserModel>(`http://localhost:2000/api/v1/users/${UserId}`);
   }
   public postUser( User:UserModel): Observable<UserModel>{
     return this.http.post<UserModel>("http://localhost:2000/api/v1/users",User)

   }
   public deleteUser(UserId:String):Observable<any>{
     return this.http.delete<any>(`http://localhost:2000/api/v1/users/${UserId}`)

   }
   public updateUser( User:UserModel): Observable<UserModel>{
     return this.http.put<UserModel>(`http://localhost:2000/api/v1/users/${User.id}`,User)
   }
}
