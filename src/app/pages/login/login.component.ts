import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  user = {username: '', password: ''};

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  // 登录
  login() {
    console.log('登录');
    this.router.navigateByUrl('/index');
  }
}
