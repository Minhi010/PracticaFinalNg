import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'admng-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  isLogin: boolean = false;
  isValidUser: boolean = false;
  form: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void { }

  login() {
    try {
      this.authService.login(this.form.value.username, this.form.value.password)
        .subscribe((data) => {
          if (data) { this.router.navigateByUrl('dashboard/client/menu') }
          this.isLogin = true;
          this.isValidUser = true;
          this.form.reset();
        });
    } catch {
      this.authService.error();

      setTimeout(() => {
        this.isLogin = false;
        this.router.navigateByUrl('login');

      }, 1500);
    }
  }
}
