import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
const MATERIAL_MODULES = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule,
  MatMenuModule
];
const SHARED_MODULES = [FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ...MATERIAL_MODULES
  ],
  exports: [...MATERIAL_MODULES, ...SHARED_MODULES],
})
export class SharedModule { }
