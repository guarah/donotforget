import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
// import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent },

  { path: '',   redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', component: AuthComponent } // pagenotfoundcomponent
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
