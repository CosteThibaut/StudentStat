import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/service/students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(public etuServ: StudentsService) { }

  ngOnInit() {
  }

}
