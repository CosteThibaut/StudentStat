import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { StudentsService } from 'src/app/service/students.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  id:string;
  model: any = {
  	nom : this.getStudent().nom,
  };
  constructor(private route:ActivatedRoute, private stdService : StudentsService) { }

  ngOnInit() {
    this.route.params.subscribe(
      p => {
      	this.id = p.id;
      });
  }
  getStudent(){
  	return this.stdService.getStudent(this.id);
  }

  modify(){
  	this.stdService.modify(this.model,this.id);
  }
}
