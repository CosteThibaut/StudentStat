import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authorisation',
  templateUrl: './authorisation.component.html',
  styleUrls: ['./authorisation.component.css'],
  providers: [AuthService]
})

export class AuthorisationComponent implements OnInit {
  model: any = {
  	rule1 : this.getAuth1(),
  	rule2 : this.getAuth2(),
  	rule3 : this.getAuth3()
  };

  constructor(private authService: AuthService ) {}

  ngOnInit() {
  }

  getAuth1(){
  	return this.authService.getStudent().telAuth;
  }

  getAuth2(){
  	return this.authService.getStudent().mailAuth;
  }

  getAuth3(){
  	return this.authService.getStudent().metierAuth;
  }

  allow(){
  	this.authService.allow(this.model);
  }
}
