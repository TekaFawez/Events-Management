import { Component, OnInit,ViewChild } from '@angular/core';
import { EventService } from 'src/app/core/https/events.service';
import { EventModel } from 'src/app/core/models/event.model';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PlaceFormComponent } from 'src/app/pages/place-form/place-form.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events : EventModel[]=[];
  displayedColumns: string[] = [ 'name', 'place','price','date','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private eventsService:EventService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getEvents()

  }
  getEvents(){
    this.eventsService.getAllEvents().subscribe((res)=>{
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.paginator=this.paginator
      this.dataSource.sort=this.sort
    //  console.log(res)
    //  this.events=res;
    })

  }

    openDialog(row: any) {
      if( row.place==0){
        alert('impossible de prendre une place ')
        return
      }
    this.dialog.open(PlaceFormComponent, {
      width:'30%',
      data:row
    });
  }








  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
