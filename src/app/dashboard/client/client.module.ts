import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientService } from './services/client.service';


@NgModule({
  declarations: [ClientComponent, ClientListComponent, ClientFormComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  providers: [ClientService],
})
export class ClientModule { }
