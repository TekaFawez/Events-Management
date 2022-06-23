import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EventService } from './core/https/events.service';
import { LayoutsModule } from './layouts/layouts.module';
import { ModulesModule } from './modules/modules.module';

import { PagesModule } from './pages/pages.module';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { PlaceFormComponent } from './pages/place-form/place-form.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';







//import { AdminPageComponent } from './admin-page/admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceFormComponent,




  ],
  imports: [
    RoutesModule,
    CoreModule,
    MatPaginatorModule,
    LayoutsModule,
    ModulesModule,
    PagesModule,
    SharedModule,
    BrowserModule,

    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,



//     FormsModule,
// ReactiveFormsModule,
FormsModule,
ReactiveFormsModule,
HttpClientModule,
BrowserAnimationsModule,



  ],
  exports:[LayoutsModule],
  providers: [EventService],
  bootstrap: [AppComponent],


})
export class AppModule { }
