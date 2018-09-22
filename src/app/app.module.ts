import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import {NavTopComponent} from './share/nav-top/navTop.component';
import {Panel1Component} from './share/panel1/panel1.component';

import {LoginComponent} from './pages/login/login.component';
import {IndexComponent} from './pages/index/index.component';
import {MyLogComponent} from './pages/myLog/myLog.component';
import {MyLogEditComponent} from './pages/myLog/edit/edit.component';
import {MyLogViewComponent} from './pages/myLog/view/view.component';
import {MyPhotoComponent} from './pages/myPhoto/myPhoto.component';

import {RouterModule} from '@angular/router';

import {appRoutes} from './app.routes';
import {LoginService} from './sevices/login.service';
import {AuthGuard} from './sevices/auth.service';
import {MyLogService} from './sevices/myLog.service';
// import {LuErrorAlertComponent} from './share/lu-error-alert/luErrorAlert.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    Panel1Component,
    // LuErrorAlertComponent,

    LoginComponent,
    IndexComponent,
    // 我的日志
    MyLogComponent,
    MyLogViewComponent,
    MyLogEditComponent,

    MyPhotoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    LoginService,
    MyLogService,
    AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
