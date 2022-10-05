import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
const MATERIAL_MODULES = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule,
  MatMenuModule,
  MatSidenavModule,
  MatDividerModule,
  MatTableModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatSortModule,
  MatGridListModule,
  MatDatepickerModule,
  MatNativeDateModule
];
const SHARED_MODULES = [FormsModule, ReactiveFormsModule];
const SHARED_COMPONENTS = [LoginFormComponent];

@NgModule({
  declarations: [...SHARED_COMPONENTS, PagenotfoundComponent],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    ...SHARED_MODULES
  ],
  exports: [...MATERIAL_MODULES, ...SHARED_MODULES, ...SHARED_COMPONENTS],
})
export class SharedModule { }
