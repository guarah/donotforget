import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavBarComponent } from 'app/shared/nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    NavBarComponent
  ],
  exports: [
    NavBarComponent
  ]
  // providers:    [ ...Service ]
})
export class SharedModule { }
