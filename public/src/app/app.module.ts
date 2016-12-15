import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import {Material2AppAppComponent, DialogContent} from './app.component';
// import { AppComponent } from './app.component';
import { HeaderComponent } from "./shared/header.component";
import { AuthService } from "./auth/auth.service";
import { AuthComponent } from './auth/auth.component';
import { ErrorComponent } from './error/error.component';
import { ErrorService } from './error/error.service';


@NgModule({
  declarations: [
    // AppComponent,
    AuthComponent,
    ErrorComponent,
    Material2AppAppComponent,
    DialogContent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    HttpModule
  ],
  providers: [AuthService, ErrorService],
  bootstrap: [Material2AppAppComponent]
})
export class MaterialAppModule { }
