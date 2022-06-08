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

//import { AdminPageComponent } from './admin-page/admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    RoutesModule,
    CoreModule,

    LayoutsModule,
    ModulesModule,
    PagesModule,
    SharedModule,
    BrowserModule,

    AppRoutingModule,
    FormsModule,
ReactiveFormsModule,
HttpClientModule,

  ],
  exports:[LayoutsModule],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
