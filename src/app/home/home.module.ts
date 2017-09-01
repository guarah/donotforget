import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Services
import { AppBarService } from './app-bar/app-bar.service';
// Modules
import { ChecklistModule } from 'app/checklist/checklist.module';
import { ComponentsModule } from './../lib/components/components.module';
import { HomeRoutingModule } from './home-routing.module';
import { MaterializeModule } from 'angular2-materialize';
// Components
import { AppBarComponent } from './app-bar/app-bar.component';
import { HomeComponent } from 'app/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ChecklistModule,
    ComponentsModule,
    MaterializeModule,
    HomeRoutingModule
  ],
  declarations: [
    AppBarComponent,
    HomeComponent,
    DashboardComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    AppBarService
  ]
})
export class HomeModule { }
