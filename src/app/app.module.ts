import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AuthModule } from 'app/auth/auth.module';

// Routed Components
import { AuthComponent } from 'app/auth/auth.component';
import { HomeComponent } from 'app/home/home.component';
import { ChecklistComponent } from 'app/checklist/checklist.component';
import { HomeModule } from 'app/home/home.module';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'checklists', component: ChecklistComponent },

  { path: '',   redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', component: AuthComponent }

];

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AuthModule,
    HomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
