// Fawez TEKA
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.


import { Injectable } from '@angular/core';


const TOKEN = 'jwtToken';
@Injectable({
  providedIn: 'root'
})


export class LocalstorageService {

  setToken(data: any) {
    localStorage.setItem(TOKEN, data);
  }

  getToken(): string |null{
    return localStorage.getItem(TOKEN);
  }

  removeToken() {
    localStorage.removeItem(TOKEN);
  }
}
