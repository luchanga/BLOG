import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import userModel from '../models/userLogin.model';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {LoginService} from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // 当前路由名称
    // const path = route.routeConfig.path;
    // this.loginService.isLogin().subscribe((resp) => {
    //   console.log(resp);
    //   // 是否登录
    //   const isLogin = resp;
    //   if (!isLogin) {
    //     // 未登录，跳到登录页面
    //     this.router.navigate(['login']);
    //     return false;
    //   } else {
    //     return true;
    //   }
    // });
    return true;
  }

}
