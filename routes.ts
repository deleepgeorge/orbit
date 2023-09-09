import { Routes } from "@angular/router";    
import { AboutComponent } from "src/app/about/about.component";
import { AdminComponent } from "src/app/admin/admin.component";
import { MydashboardComponent } from "src/app/mydashboard/mydashboard.component";

export const appRoutes: Routes = [
    { path: 'about', component: AboutComponent },    
    { path: 'mydashboard', component: MydashboardComponent },
    { path: 'admin', component:AdminComponent },
    { path: '', component: MydashboardComponent }
]