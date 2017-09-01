import { ChecklistComponent } from 'app/checklist/checklist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
// import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'checklists', component: ChecklistComponent },
  { path: '',   redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', component: AuthComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
