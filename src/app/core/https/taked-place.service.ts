import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TakePlaceModels } from '../models/take-place.model';

@Injectable({
  providedIn: 'root'
})
export class TakedPlaceService {

  constructor(private http: HttpClient) { }
  public getPlaces(): Observable<any>{
    return this.http.get<any>("http://localhost:3000/TakedPlace")
   }
   public postPlace( place:TakePlaceModels): Observable<TakePlaceModels>{
    //return this.http.post<TakePlaceModels>("http://localhost:3000/TakedPlace",place,client_id,event_id)

    //client_id is the auth user from session
    return this.http.post<TakePlaceModels>("http://localhost:2000/api/v1/takedPlace",place)

  }
}
