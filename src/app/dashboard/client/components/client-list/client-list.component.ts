import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/entity/client';
import { ClientService } from '../../services/client.service';


@Component({
  selector: 'admng-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['name', 'lastname', 'email', 'dni', 'dateoB', 'phone', 'address', 'actions'];
  dataSource!: MatTableDataSource<any>;
  clientList: Client[] = [];

  constructor(private clientService: ClientService, private snack: MatSnackBar, private router: Router) { }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.fillClients();
  }

  fillClients() {
    this.clientList = this.clientService.getClients();
    this.dataSource = new MatTableDataSource(this.clientList);
  }
  editClient(index: number) {
    this.router.navigateByUrl(`dashboard/client/form/${index}`);
  }
  deleteClient(index: number) {
    let indexDelete = this.clientService.deleteClients(index);
    this.dataSource.data = this.dataSource.data.filter((item, index) => index !== indexDelete);
    this.snack.open('Cliente eliminado.', 'x', {
      duration: 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

}
