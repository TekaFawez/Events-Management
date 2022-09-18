import { EventModel } from "../models/event.model";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { catchError, Observable, of, Subject, tap } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class EventService {
  // events !: EventModel[]

constructor(private http: HttpClient) {



  }
  private _refreshrequired= new Subject<void>() // use for refresh the place number when we save
  get Refreshrequired(){
    return this._refreshrequired
  }
  public getAllEvents(): Observable<EventModel[]>{
   return this.http.get<any>("http://localhost:2000/api/v1/events").pipe(
    tap((res)=> this.log(res)),
    catchError((err)=>
      this.handleError(err,[])
    )
   )
  }

  public getEvent(eventId: string): Observable<EventModel|undefined> {
    return this.http.get<EventModel>(`http://localhost:2000/api/v1/events/${eventId}`).pipe(
      tap((res)=> this.log(res)),
      catchError((err)=>
      this.handleError(err,undefined))
     );
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
    return this.http.put<any>("http://localhost:2000/api/v1/updatePlace/"+id,data).pipe(
      tap(()=>{
        this.Refreshrequired.next()
      })
    )
  }


private log(response : EventModel[]|EventModel|undefined){
  console.table(response)
}
private handleError (error : Error , errorValue : any){
console.log(error)
return of (errorValue)// of transfor simple data as observable
}



}
