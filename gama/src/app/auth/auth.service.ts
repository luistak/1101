import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Observable, from, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  user: any = null;
  errorMessage: String = '';
  userLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(public afAuth: AngularFireAuth) {
    this.user = this.afAuth.auth.currentUser;
    if (!this.user) {
      this.userLogged.next(false);
      return;
    }

    this.userLogged.next(true);
  }

  getUser() {
    if (!this.isLoggedIn()) {
      return null;
    }

    return this.user;
  }

  loginWithGoogle(): Observable<boolean> {
    const promise = this.afAuth.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then(
        (res: any) => {
          if (!('user' in res)) {
            return false;
          }

          this.user = res.user;
          this.loggedIn = true;
          this.userLogged.next(true);

          return true;
        },
        (error) => {
          this.loggedIn = false;

          let message = 'Oops, parece que houve um erro inesperado :( tente novamente mais tarde';
          switch (error) {
            case 'auth/account-exists-with-different-credential':
              message = 'Oops, parece que as credenciais estão incorretas :( tente novamente';
              break;
            case 'auth/cancelled-popup-request':
              message = 'Oops, não é possível abrir mais de um pop-up ao mesmo tempo';
              break;
            case 'auth/operation-not-allowed':
              message = 'Oops, parece que você não permitiu o acesso ao nosso app';
              break;
            case 'auth/popup-blocked':
              message = 'Oops, pop-up\'s estão bloqueados, favor desabilitar para acessar nosso app';
              break;
            case 'auth/popup-closed-by-user':
              message = 'Oops, pop-up foi fechado :( tente novamente o/';
              break;
            case 'auth/unauthorized-domain':
              message = 'Oops, domínio não é permidio :(';
              break;

            default:
              break;
          }

          this.user = null;
          this.loggedIn = false;
          this.errorMessage = message;
          this.userLogged.next(false);

          return false;
        }
      );

      return from(<Promise<boolean>>promise);
  }

  logout(): Observable<boolean> {
    const promise = this.afAuth.auth.signOut()
      .then(
        (res) => {
          return true;
        },
        (error) => {
          return false;
        }
      );

    return from(<Promise<boolean>>promise);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
