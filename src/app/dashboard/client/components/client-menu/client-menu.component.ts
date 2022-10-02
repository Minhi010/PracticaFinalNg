import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admng-client-menu',
  templateUrl: './client-menu.component.html',
  styleUrls: ['./client-menu.component.scss']
})
export class ClientMenuComponent implements OnInit {
  title = "Clientes";
  constructor() { }

  ngOnInit(): void {
  }

}
