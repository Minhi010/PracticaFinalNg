import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientService } from './services/client.service';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientMenuComponent } from './components/client-menu/client-menu.component';


@NgModule({
  declarations: [ClientComponent, ClientListComponent, ClientFormComponent, ClientMenuComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [ClientService],
})
export class ClientModule { }
