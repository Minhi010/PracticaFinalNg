
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable, of } from "rxjs";


@Injectable({ providedIn: "root" })
export class AuthService {
  isLogged = false;
  constructor(private fb: FormBuilder, private snack: MatSnackBar, private router: Router) {
  }
  login(username: string, password: string): Observable<boolean> {
    if (username == "admin" && password == "admin123") {
      localStorage.setItem("isLogged", "true");
      this.isLogged = true;
    } else {
      this.error();
      localStorage.setItem("isLogged", "false");
      this.isLogged = false;
    }
    return of(this.isLogged);
  }
  error() {
    this.snack.open('Usuario o contraseña no válida.', 'x', {
      duration: 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  isAuthenticated() {
    let isAuth = localStorage.getItem("isLogged") ?? "false";
    return JSON.parse(isAuth);
  }
  logout() {
    localStorage.removeItem("isLogged");
    this.router.navigateByUrl('login');
  }
}
