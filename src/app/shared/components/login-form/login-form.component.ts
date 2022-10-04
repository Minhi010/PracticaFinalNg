import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'admng-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {
  loading = false;
  form: FormGroup;

  constructor(private fb: FormBuilder, private snack: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
  }
  ingresar() {
    const user = this.form.value.username;
    const pass = this.form.value.password;
    if (user == "admin" && pass == "admin123") {
      this.fakeloading();
    } else {
      this.error();
      this.form.reset();
    }
  }
  error() {
    this.snack.open('Usuario o contraseña no válida.', 'x', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  fakeloading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigateByUrl('dashboard/client/menu');
    }, 1500);
  }
}
