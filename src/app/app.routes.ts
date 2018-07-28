import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';
import {MyLogComponent} from './myLog/myLog.component';

export const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  // 登录
  {path: 'login', component: LoginComponent},
  // 首页
  {path: 'index', component: IndexComponent},
  // 我的日志
  {path: 'myLog', component: MyLogComponent}
]
