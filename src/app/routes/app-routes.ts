import { Routes } from "@angular/router";
import { AuthGuard } from "../core/auth/auth.guard";
import { MainLayoutComponent } from "../layouts/main-layout/main-layout.component";
import { AddListComponent } from "../modules/events/components/add-list/add-list.component";
import { EventsListComponent } from "../modules/events/components/events-list/events-list.component";
import { AdminPageComponent } from "../pages/admin-page/admin-page/admin-page.component";
import { DashboardComponent } from "../pages/admin-page/admin-page/dashboard/dashboard.component";
import { LoginAdminComponent } from "../pages/admin-page/admin-page/login-admin/login-admin.component";
import { AddUserComponent } from "../pages/admin-page/admin-page/users/add-user/add-user.component";
import { UsersListComponent } from "../pages/admin-page/admin-page/users/users-list/users-list.component";

import { ContactUsComponent } from "../pages/contact-us/contact-us.component";
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
              path: "contact",
              component: ContactUsComponent
              // loadChildren: () => import('../pages/contact-us/contact-us.component').then((m)=>m.ContactUsComponent)
          },
            {
                path: "event-user",
                canActivate:[AuthGuard],
                //component: AttendeesListComponent
                loadChildren: () => import('../modules/events/events.module').then((m)=>m.EventsModule)
            },
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
    path: "add-user",
    component: AddUserComponent
},

{
  path : 'add-user/:id',
  component : AddUserComponent
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
      path:"admin-login",
      component:LoginAdminComponent
    },
    {
      path: "admin",
      component: AdminPageComponent,
      canActivate: [AuthGuard],

      children : [
        {path: '',
         component : DashboardComponent},
        {
          path:"events",
          component:EventsListComponent
        },
        {
          path:"user-list",
          component:UsersListComponent
        },


      ]

  },
    {
        path: "**",
        redirectTo: "404"
    }
]
