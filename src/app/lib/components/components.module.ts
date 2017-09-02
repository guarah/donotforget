import { FormQuestionComponent } from './form/form-question/form-question.component';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEditComponent } from 'app/lib/components/form-edit/Form-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
// Material
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdInputModule } from '@angular/material';

const components = [
  FormEditComponent,
  LoadingComponent,
  FormComponent,
];

const materialModules = [
  MdButtonModule,
  MdCardModule,
  MdToolbarModule,
  MdMenuModule,
  MdInputModule
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules
  ],
  declarations: [
    ...components,
    FormQuestionComponent
  ],
  exports: [
    ...components,
    ...materialModules
  ]
})
export class ComponentsModule { }
