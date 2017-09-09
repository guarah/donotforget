import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskListComponent } from 'app/checklist/task-list/task-list.component';
import { HomeComponent } from 'app/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChecklistComponent } from 'app/checklist/checklist.component';

const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'checklists',
        component: ChecklistComponent
        // ,
        // children: [
        //   {
        //     path: ':id',
        //     component: TaskListComponent
        //   }
        // ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
