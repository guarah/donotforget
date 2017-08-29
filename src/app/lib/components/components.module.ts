import { CommonModule } from '@angular/common';
import { FormEditComponent } from 'app/lib/components/form-edit/Form-edit.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
// Material
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

const components = [
  FormEditComponent,
  LoadingComponent
];

const materialModules = [
  MdButtonModule,
  MdCardModule,
  MdToolbarModule
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ...materialModules
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components,
    ...materialModules
  ]
})
export class ComponentsModule { }
