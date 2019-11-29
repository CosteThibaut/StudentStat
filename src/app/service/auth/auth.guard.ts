import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { isNull } from 'util';
import { AuthService } from 'src/app/service/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

constructor(
  private router: Router,
  private authService: AuthService
) { }

canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Récupération de l'utilisateur connecté
    const isLoggedIn = !isNull(localStorage.getItem('user'));
    let hasRights = true;

    if (!isLoggedIn) {
        // Si pas d'utilisateur connecté : redirection vers la page de login
        console.log('Pas connecté');
        this.router.navigate(['/login']);  
    }
    const rights = next.data['rights'];
    if(rights){
      hasRights = this.authService.checkRights(rights);
    }
    if(!hasRights){
      // Si pas d'utilisateur connecté : redirection vers la page de login
      console.log('Pas les droits');
      this.router.navigate(['/home']);
    }
    return isLoggedIn && hasRights;
  }
}