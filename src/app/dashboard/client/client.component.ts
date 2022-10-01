import { Component } from '@angular/core';

@Component({
  selector: 'admng-client',
  template: `
    <h1>Bienvenido a seccion clientes</h1>
    <router-outlet></router-outlet>
  `,
})
export class ClientComponent { }
