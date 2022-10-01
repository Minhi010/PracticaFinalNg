import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComponentsComponent } from './client/components/components.component';
import { ClientFormComponent } from './client/components/client-form/client-form.component';
import { ClientListComponent } from './client/components/client-list/client-list.component';
import { ProductListComponent } from './product/components/product-list/product-list.component';
import { ProductFormComponent } from './product/components/product-form/product-form.component';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';


@NgModule({
  declarations: [
    ComponentsComponent,
    ClientFormComponent,
    ClientListComponent,
    ProductListComponent,
    ProductFormComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
