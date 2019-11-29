import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/service/students.service';

@Injectable()
export class AuthService {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stdService : StudentsService
  ) { }

  login(loginForm: any) {
    console.log('Tentative de connexion');
    let rightsUser = [];

    if(this.stdService.login(loginForm.id,loginForm.password)){
      let nb = this.stdService.getStudentNumber(loginForm.id);
      if (this.stdService.etudiants[nb].droit=="admin"){
        rightsUser = ["admin"];
      }
      else{
        rightsUser = ["user"];
      }
      this.setUser({login : loginForm.id, rights : rightsUser});

      // On accède à la page souhaitée
      this.router.navigate(['/home']);
      return true;
    }
    return false;
  }

  logout() {
    console.log('Tentative de déconnexion');

    this.clearUser();
    this.router.navigate(['/login']);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  clearUser() {
    localStorage.removeItem('user');
  }

	checkRights(rights: string[]) {
	  const user = this.getUser();

	  for (const r of user.rights) {
	    if (rights.includes(r)) {
	      return true;
	    }
	  }
	  return false;
	}

  getStudent(){
    return this.stdService.getStudent(this.getUser().login);
  }

  allow(allowForm : any){
    let nb = this.stdService.getStudentNumber(this.getUser().login);
    this.stdService.etudiants[nb].telAuth = allowForm.rule1;
    this.stdService.etudiants[nb].mailAuth = allowForm.rule2;
    this.stdService.etudiants[nb].metierAuth = allowForm.rule3;
  }
}
