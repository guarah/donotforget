import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthComponent } from 'app/auth/auth.component';
import { AuthService } from 'app/auth/auth.service';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './../lib/components/components.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    ComponentsModule
  ],
  declarations: [
    AuthComponent
  ],
  exports: [
    AuthComponent
  ],
  providers: [ AuthService ]
})
export class AuthModule { }
