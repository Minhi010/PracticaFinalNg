import { Component } from '@angular/core';

@Component({
  selector: 'admng-client',
  template: `
    <h1 style="color:white;">Bienvenido a seccion {{title}}</h1>
    <router-outlet></router-outlet>
  `,
})
export class ClientComponent {
  title = "Clientes";
}
