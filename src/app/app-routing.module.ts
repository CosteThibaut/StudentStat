import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/service/auth/auth.guard';

import { RgpdComponent } from './rgpd/rgpd.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthorisationComponent } from './authorisation/authorisation.component';
import { StudentListComponent } from './student-list/student-list.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { StatComponent } from './stat/stat.component';


const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent},
	{path:'home', canActivate: [AuthGuard], component:HomeComponent,data:{rights:["user","admin"]}},
	{path:'rgpd', canActivate: [AuthGuard], component:RgpdComponent,data:{rights:["user"]}},
	{path:'authorisation', canActivate: [AuthGuard], component:AuthorisationComponent,data:{rights:["user"]}},
	{path:'studentslist', canActivate: [AuthGuard], component:StudentListComponent,data:{rights:["admin"]}},
	{path:'etudiant/:id', canActivate: [AuthGuard], component:EtudiantComponent,data:{rights:["admin"]}},
	{path:'stat', canActivate: [AuthGuard], component:StatComponent,data:{rights:["admin"]}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
