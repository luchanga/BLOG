import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../sevices/login.service';
import {User} from '../../models';
import userModel from '../../models/userLogin.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  user: User = new User();
  comfirmShow = false;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
  }

  // 登录
  login() {
    this.loginService.login(this.user)
      .subscribe(
        (resp) => {
          if (resp.body != null) {
            localStorage.setItem('token', resp.headers && resp.headers.get('authorization'));
            localStorage.setItem('currentUser', JSON.stringify(resp.body));
            this.router.navigateByUrl('/index');
            // userModel.isLogin = true;
          } else {
            this.comfirmShow = true;
          }
        }, (error) => {
          this.comfirmShow = true;
        }
      );
  }

  afterClose() {
    this.comfirmShow = false;
  }
}
