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
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';
import {MyLogComponent} from './myLog/myLog.component';

import {RouterModule} from '@angular/router';

import {appRoutes} from './app.routes';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavTopComponent,
    IndexComponent,
    MyLogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
