import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/service/auth/auth.guard';
import { AuthService } from 'src/app/service/auth/auth.service';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RgpdComponent } from './rgpd/rgpd.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthorisationComponent } from './authorisation/authorisation.component';
import { StudentListComponent } from './student-list/student-list.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { StatComponent } from './stat/stat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RgpdComponent,
    HomeComponent,
    LoginComponent,
    AuthorisationComponent,
    StudentListComponent,
    EtudiantComponent,
    StatComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ AuthService,AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
