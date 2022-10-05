import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/entity/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'admng-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  formC: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private fb: FormBuilder, private clientService: ClientService, private router: Router) {
    this.formC = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      dni: ['', [Validators.required]],
      dateoB: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  addClient() {
    const client: Client = {
      name: this.formC.value.name,
      lastname: this.formC.value.lastname,
      email: this.formC.value.email,
      dni: this.formC.value.dni,
      dateoB: this.formC.value.dateoB,
      phone: this.formC.value.phone,
      address: this.formC.value.address
    };
    this.clientService.addClients(client);
    this.router.navigateByUrl('dashboard/client/list');
  }
}
