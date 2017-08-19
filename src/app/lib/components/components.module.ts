import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEditComponent } from 'app/lib/components/form-edit/Form-edit.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';

const components = [
  FormEditComponent,
  LoadingComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class ComponentsModule { }
