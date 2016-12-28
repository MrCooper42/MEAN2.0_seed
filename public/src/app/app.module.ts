import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';

import { routing } from './app.routing';
import { HeaderComponent } from './shared/header.component';
import { AuthService } from './auth/auth.service';
import { AuthenticationComponent } from './auth/authentication.component';
import { ErrorComponent } from './errors/error.component';
import { ErrorService } from './errors/error.service';
import { ProfileComponent } from './profile/profile.component';
import { NewsComponent } from './news/news.component';
import { NewsService } from './news/news.service';
import { GamesComponent } from './games/games.component';
import { JobListingsComponent } from './job-listings/job-listings.component';
import { FilesComponent } from './files/files.component';
import { ProfileEditComponent } from './profile/profile-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HeaderComponent,
    ErrorComponent,
    AppComponent,
    ProfileComponent,
    NewsComponent,
    GamesComponent,
    JobListingsComponent,
    FilesComponent,
    ProfileEditComponent
  ],
  imports: [
    NgbModule.forRoot(),
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    AuthService,
    ErrorService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
