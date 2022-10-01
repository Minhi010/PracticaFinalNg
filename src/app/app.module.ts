import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ClientComponent } from './dashboard/client/components/client/client.component';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';
import { RegisterFormComponent } from './shared/components/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
