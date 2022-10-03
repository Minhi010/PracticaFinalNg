import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '', component: LoginFormComponent
  },
  {
    path: 'login', component: LoginFormComponent
  }, {
    path: 'dashboard',
    loadChildren: () =>
      import('../app/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
