import { Router } from '@angular/router';
import { OnInit, NgZone } from '@angular/core';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  user = null;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router,
    public zone: NgZone) {
      this.user = this.authService.getUser();
    }

  ngOnInit() {
    this.authService.userLoggedSubscription.subscribe(
      (res: boolean) => {
        this.user = this.authService.getUser();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  logout() {
    this.authService.logout().subscribe(
      (res: boolean) => {
        if (res) {
          this.zone.run(() => { this.router.navigate(['/']); });
          return;
        }
      },
      (error) => {
        console.error(error);
        alert(error);
      }
    );
  }
}
