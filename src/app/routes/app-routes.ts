import { Routes } from "@angular/router";
import { MainLayoutComponent } from "../layouts/main-layout/main-layout.component";
import { AddListComponent } from "../modules/events/components/add-list/add-list.component";
import { EventsListComponent } from "../modules/events/components/events-list/events-list.component";
import { AdminPageComponent } from "../pages/admin-page/admin-page/admin-page.component";
import { DashboardComponent } from "../pages/admin-page/admin-page/dashboard/dashboard.component";
import { LoginComponent } from "../pages/login/login.component";
import { MaintenanceErrorComponent } from "../pages/maintenance-error/maintenance-error.component";
import { NotFoundComponent } from "../pages/not-found/not-found.component";
import { RegisterComponent } from "../pages/register/register.component";

export const appRoutes: Routes = [
    {
        path: "home",
        redirectTo: "",
        pathMatch: "full"
    },
    {
        path: "",
        component: MainLayoutComponent,

        children:[
          {
            path: "",
            //component: EventsListComponent
            loadChildren: () => import('../modules/home/home.module').then((m)=>m.HomeModule)
        },
            {
                path: "attendees",
                //component: EventsListComponent
                loadChildren: () => import('../modules/attendees/attendees.module').then((m)=>m.AttendeesModule)
            },
            // {
            //     path: "events",
            //     //component: AttendeesListComponent
            //     loadChildren: () => import('../modules/events/events.module').then((m)=>m.EventsModule)
            // },
        //     {
        //       path: "add-event",

        //       loadChildren: () => import('../modules/events/events.module').then((m)=>m.EventsModule)
        //   }
        ]
    },
    {
      path: "add-event",
      component: AddListComponent
  },
  {
    path : 'add-event/:id',
    component : AddListComponent
  },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent,
    },
    {
        path: "404",
        component: NotFoundComponent
    },
    {
        path: "maintenance",
        component: MaintenanceErrorComponent
    },
    {
      path: "admin",
      component: AdminPageComponent,
      children : [
        {path: '', component : DashboardComponent},
        {
          path:"events",
          component:EventsListComponent
        }
      ]

  },
    {
        path: "**",
        redirectTo: "404"
    }
]
