
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable, of } from "rxjs";


@Injectable()
export class AuthService {
  isLogin = false;

  constructor(private fb: FormBuilder, private snack: MatSnackBar, private router: Router) {

  }
  login(username: string, password: string): Observable<boolean> {

    if (username == "admin" && password == "admin123") {
      this.isLogin = true;

    } else {
      this.error();
      this.isLogin = false;
    }
    console.log(this.isLogin);
    return of(this.isLogin);
  }
  error() {
    this.snack.open('Usuario o contraseña no válida.', 'x', {
      duration: 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
