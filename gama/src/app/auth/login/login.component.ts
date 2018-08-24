import { AuthService } from './../auth.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
  }

  login() {
    this.authService.loginWithGoogle().subscribe(
      (res: boolean) => {
        if (!res) {
          alert(this.authService.errorMessage);
          return;
        }

        this.router.navigate(['/tarefas'], { skipLocationChange: true });
      },
      (error) => {
        console.error(error);
        alert('Oops :( aconteceu algo inesperado, tente novamente mais tarde!');
      }
    );
  }

  logout() {
    this.authService.logout().subscribe(
      (res: boolean) => {
        // In case user is already logged in
        if (res) {
          alert('Deslogou');
          return;
        }
        alert('Ainda logado');
      },
      (error) => {
        console.error(error);
        alert(error);
      }
    );
  }

  ngOnInit() {
    // this.checkLoggedUser();
  }

  checkLoggedUser() {
    this.authService.userLogged.subscribe(
      (res: boolean) => {
        // In case user is already logged in
        if (res) {
          this.router.navigate(['/tarefas']);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
