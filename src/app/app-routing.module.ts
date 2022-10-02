import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { RegisterFormComponent } from './shared/components/register-form/register-form.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: 'register', component: RegisterFormComponent
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
