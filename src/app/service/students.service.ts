import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  etudiants:Array<any>;
  constructor(private http: HttpClient) {
    this.http.get<Array<any>>('assets/data/data.json').subscribe(
      etudiants =>{
        this.etudiants = etudiants
      }
      );
	}

	login(id : string , pwd : string){
		for (var i = 0; i < this.etudiants.length; i++) {
			if(this.etudiants[i].id==id && this.etudiants[i].mdp == pwd){
				return true;
			}
		}
		return false;
	}

	getStudent(id : string){
		for (var i = 0; i < this.etudiants.length; i++) {
			if(this.etudiants[i].id==id){
				return this.etudiants[i];
			}
		}
		return false;
	}

  getStudentNumber(id : string){
    for (var i = 0; i < this.etudiants.length; i++) {
      if(this.etudiants[i].id==id){
        return i;
      }
    }
  }

  modify(modForm : any,id : string){
    let nb = this.getStudentNumber(id);
    console.log(modForm.prenom);
    if (modForm.nom!='' && modForm.nom!=undefined) {
      this.etudiants[nb].nom = modForm.nom;
    }
    if (modForm.prenom!='' && modForm.prenom!=undefined) {
      this.etudiants[nb].prenom = modForm.prenom;
    }
    if (modForm.promo!='' && modForm.promo!=undefined) {
      this.etudiants[nb].promo = modForm.promo;
    }
    if (modForm.option!='' && modForm.option!=undefined) {
      this.etudiants[nb].option = modForm.option;
    }
    if (modForm.metier!='' && modForm.metier!=undefined) {
      this.etudiants[nb].metier = modForm.metier;
    }
    if (modForm.tel!='' && modForm.tel!=undefined) {
      this.etudiants[nb].tel = modForm.tel;
    }
    if (modForm.mail!='' && modForm.mail!=undefined) {
      this.etudiants[nb].mail = modForm.mail;
    }

  }

}
