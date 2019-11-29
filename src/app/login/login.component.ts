import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model);
  }

}
