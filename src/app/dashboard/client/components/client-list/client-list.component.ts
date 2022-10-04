import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/core/entity/client';

const clients: Client[] =
  [{
    nombre: 'Leanne',
    apellido: 'Graham',
    email: 'Sincere@april.biz',
    dni: 22257789,
    fechaNac: new Date(),
    telefono: '1-770-736-8031 x56442',
    direccion: 'Kulas Light Apt. 556'
  }, {
    nombre: 'Readme',
    apellido: 'Graham',
    email: 'read@april.biz',
    dni: 25896741,
    fechaNac: new Date(),
    telefono: '1-555-736-8031',
    direccion: 'Victor Plains Light Apt. 556'
  },
  {
    nombre: 'Clementine',
    apellido: 'Bauch',
    email: 'Nathan@yesenia.net',
    dni: 15789456,
    fechaNac: new Date(),
    telefono: '1-463-123-4447',
    direccion: 'Douglas Extension'
  }];
@Component({
  selector: 'admng-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellido', 'email', 'dni', 'fechaNac', 'telefono', 'direccion', 'acciones'];
  dataSource = new MatTableDataSource<Client>(clients);

  constructor() { }

  ngOnInit(): void {
  }


}
