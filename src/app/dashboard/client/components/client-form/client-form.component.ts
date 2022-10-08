import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'admng-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  index?: number;
  formC: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private fb: FormBuilder, private clientService: ClientService, private router: Router, private activatedRoutes: ActivatedRoute) {
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

    this.activatedRoutes.params.subscribe((params: any) => {
      if (params.index) {
        let clientFound = this.clientService.getClientByIndex(params.index);
        this.formC.get('name')?.setValue(clientFound.name);
        this.formC.get('lastname')?.setValue(clientFound.lastname);
        this.formC.get('email')?.setValue(clientFound.email);
        this.formC.get('dni')?.setValue(clientFound.dni);
        this.formC.get('dateoB')?.setValue(clientFound.dateoB);
        this.formC.get('phone')?.setValue(clientFound.phone);
        this.formC.get('address')?.setValue(clientFound.address);
        this.index = params.index;
      }
    })
  }
  addClient() {
    if (this.formC.valid) {
      this.clientService.addClients(this.formC.value);
      this.router.navigateByUrl('dashboard/client/list');
    }
  }
  updateClient() {
    if (this.formC.valid) {
      this.clientService.editClients(this.formC.value, this.index!);
      this.router.navigateByUrl('dashboard/client/list');
    }
  }
}
