import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from '../shared/components/login-form/login-form.component';
import { RegisterFormComponent } from '../shared/components/register-form/register-form.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'client', loadChildren: () => import('../dashboard/client/client.module').then(m => m.ClientModule),
      },
      {
        path: 'product', loadChildren: () => import('../dashboard/product/product.module').then(m => m.ProductModule),
      },
      {
        path: '', pathMatch: 'full', redirectTo: 'client',
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
