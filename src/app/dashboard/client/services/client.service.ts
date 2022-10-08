import { Injectable } from '@angular/core';
import { Client } from 'src/app/core/entity/client';
const KEYCLIENT = 'keyClients';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() {
    if (!localStorage.getItem(KEYCLIENT)) {
      localStorage.setItem(KEYCLIENT, JSON.stringify(CLIENT));
    }
  }
  getClients(): Client[] {
    let stringClient = localStorage.getItem(KEYCLIENT)!;
    let parseClient = JSON.parse(stringClient);
    return parseClient;
  }
  getClientsByName(name: string): Client[] {
    let clientsList = this.getClients();
    let filteredClients = clientsList.filter((client) => client.name === name);
    return filteredClients;
  }
  getClientByIndex(index: number): Client {
    let clientsList = this.getClients();
    let clientFound = clientsList[index];
    return clientFound;
  }

  deleteClients(index: number) {
    let clientList = this.getClients();
    clientList.splice(index, 1);
    localStorage.setItem(KEYCLIENT, JSON.stringify(clientList));
    return index;
  }
  addClients(client: Client) {
    let clientList = this.getClients();
    clientList.push(client);
    localStorage.setItem(KEYCLIENT, JSON.stringify(clientList));
    return client;
  }
  editClients(client: Client, index: number) {
    let clientList = this.getClients();
    clientList[index] = client;
    localStorage.setItem(KEYCLIENT, JSON.stringify(clientList));
    return client;


  }
}
const CLIENT: Client[] =
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
