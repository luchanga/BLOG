import {Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {IndexComponent} from './pages/index/index.component';
import {MyLogComponent} from './pages/myLog/myLog.component';
import {MyPhotoComponent} from './pages/myPhoto/myPhoto.component';
import {MyLogEditComponent} from './pages/myLog/edit/edit.component';
import {MyLogViewComponent} from './pages/myLog/view/view.component';
import {AuthGuard} from './sevices/auth.service';

export const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  // 登录
  {path: 'login', component: LoginComponent},
  // 首页
  {path: 'index', component: IndexComponent, canActivate: [AuthGuard]},
  // 我的日志
  {path: 'myLog', component: MyLogComponent, canActivate: [AuthGuard]},
  {path: 'myLog/edit', component: MyLogEditComponent, canActivate: [AuthGuard]},
  {path: 'myLog/view', component: MyLogViewComponent, canActivate: [AuthGuard]},
  // 我的相册
  {path: 'myPhoto', component: MyPhotoComponent, canActivate: [AuthGuard]}
]
