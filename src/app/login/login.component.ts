import { Component } from '@angular/core';
import { UserAuth } from '../interfaces/user-auth';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserId } from '../interfaces/user-id';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userAuth: UserAuth = {
    nickname: ''
  }

  constructor(private authService: AuthService, private route: Router){

  }

  onLogin(){

    this.authService.login(this.userAuth).subscribe((user: UserId) => {
      sessionStorage.setItem('userId', user.userId.toString());
      this.route.navigateByUrl('/home');
    })
  }
}
