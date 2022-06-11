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

    // this.events = [
    //   { id: 1, name: "football", place: 10,  },
    //   { id: 2, name: "rock party", place: 20,  },
    //   { id: 3, name: "cinema", place: 30 }];

  }
  public getAllEvents(): Observable<EventModel[]>{
   return this.http.get<any>("http://localhost:3000/eventlist")
  }
  public getEvent(eventId: string): Observable<EventModel> {
    return this.http.get<EventModel>(`http://localhost:3000/eventlist/${eventId}`);
  }
  public postEvent( event:EventModel): Observable<EventModel>{
    return this.http.post<EventModel>("http://localhost:3000/eventlist",event)

  }
  public deleteEvent(eventId:String):Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/eventlist/${eventId}`)

  }
  public updateEvent( event:EventModel): Observable<EventModel>{
    return this.http.put<EventModel>(`http://localhost:3000/eventlist/${event.id}`,event)
  }

  // deleteCategory(categoryId: string) {
  //   return this.events.
  // }




}
