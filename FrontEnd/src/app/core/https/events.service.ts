import { EventModel } from "../models/event.model";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class EventService {
  // events !: EventModel[]

constructor(private http: HttpClient) {



  }
  public getAllEvents(): Observable<EventModel[]>{
   return this.http.get<any>("http://localhost:2000/api/v1/events")
  }

  public getEvent(eventId: string): Observable<EventModel> {
    return this.http.get<EventModel>(`http://localhost:2000/api/v1/events/${eventId}`);
  }
  public postEvent( event:EventModel): Observable<EventModel>{
    return this.http.post<EventModel>("http://localhost:2000/api/v1/events",event)

  }
  public deleteEvent(eventId:String):Observable<any>{
    return this.http.delete<any>(`http://localhost:2000/api/v1/events/${eventId}`)

  }
  public updateEvent( event:EventModel): Observable<EventModel>{
    return this.http.put<EventModel>(`http://localhost:2000/api/v1/events/${event.id}`,event)
  }
  public updatePlaceEvent( data:any,id:String): Observable<any>{
    return this.http.put<any>("http://localhost:2000/api/v1/events/"+id,data)
  }






}
