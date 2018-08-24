import { AuthService } from './../auth.service';
import { Component, OnInit, HostBinding, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, public zone: NgZone) {}

  login() {
    this.authService.loginWithGoogle().subscribe(
      (res: boolean) => {
        if (res) {
          this.zone.run(() => { this.router.navigate(['/tarefas']); });
        }
      },
      (error) => {
        console.error(error);
        alert('Oops :( aconteceu algo inesperado, tente novamente mais tarde!');
      }
    );
  }

  ngOnInit() {
    this.checkLoggedUser();
  }

  checkLoggedUser() {
    this.authService.userLoggedSubscription.subscribe(
      (res: boolean) => {
        // In case user is already logged in
        if (res) {
          this.zone.run(() => {
            this.router.navigate(['/tarefas']);
          });
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
