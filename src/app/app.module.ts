import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutes } from 'routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { AboutComponent } from './about/about.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashBoardService } from './services/admin-dash-service';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AboutComponent,
    MydashboardComponent,
    FooterComponent,    
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [
    AdminDashBoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
