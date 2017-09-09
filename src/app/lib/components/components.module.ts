import { FormQuestionComponent } from './form/form-question/form-question.component';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
// Material
import {
  MdListModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule,
  MdToolbarModule,
  MdButtonModule,
  MdCardModule,
  MdTableModule,
  MdCheckboxModule,
  MdSnackBarModule
} from '@angular/material';
import { ColorSelectorComponent } from './color-selector/color-selector.component';

const components = [
  LoadingComponent,
  FormComponent,
];

const materialModules = [
  MdButtonModule,
  MdCardModule,
  MdToolbarModule,
  MdMenuModule,
  MdInputModule,
  MdIconModule,
  MdListModule,
  MdTableModule,
  MdCheckboxModule,
  MdSnackBarModule
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
    FormQuestionComponent,
    ColorSelectorComponent
  ],
  exports: [
    ...components,
    ...materialModules
  ]
})
export class ComponentsModule { }
