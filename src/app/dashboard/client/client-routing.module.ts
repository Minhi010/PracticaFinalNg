import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientMenuComponent } from './components/client-menu/client-menu.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'menu', component: ClientMenuComponent
      },
      {
        path: 'list', component: ClientListComponent,
      },
      {
        path: 'form', component: ClientFormComponent,
      },
      {
        path: '', pathMatch: 'full', redirectTo: 'menu',
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
