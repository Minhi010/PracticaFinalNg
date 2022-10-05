import { Injectable } from '@angular/core';
import { Client } from 'src/app/core/entity/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients: Client[] =
    [{
      name: 'Leanne',
      lastname: 'Graham',
      email: 'Sincere@april.biz',
      dni: 22257789,
      dateoB: new Date(),
      phone: '1-770-736-8031',
      address: 'Kulas Light Apt. 556'
    }, {
      name: 'Readme',
      lastname: 'Graham',
      email: 'read@april.biz',
      dni: 25896741,
      dateoB: new Date(),
      phone: '1-555-736-8031',
      address: 'Victor Plains Light Apt. 556'
    },
    {
      name: 'Clementine',
      lastname: 'Bauch',
      email: 'Nathan@yesenia.net',
      dni: 15789456,
      dateoB: new Date(),
      phone: '1-463-123-4447',
      address: 'Douglas Extension'
    }];
  constructor() { }
  getClients() {
    return this.clients.slice();
  }
  deleteClients(index: number) {
    this.clients.splice(index, 1)
  }
  addClients(client: Client) {
    this.clients.push(client);
  }
}
