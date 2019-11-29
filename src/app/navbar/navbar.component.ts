import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  getLogin() {
    return this.authService.getUser().login;
  }
  checkRights(rights: string[]){
    return this.authService.checkRights(rights);
  }

  logout() {
    return this.authService.logout();
  }
}
