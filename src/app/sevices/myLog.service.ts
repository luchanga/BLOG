import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {User, Blogger, Blog} from '../models';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class MyLogService {

  constructor(private http: HttpClient) {}

  blogListUrl = 'http://localhost:8080/blog/getBlog';
  authorization = this.getToken();

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': this.authorization != null ? this.authorization : ''
    })
  };

  // 获取日志列表
  getLogList(): Observable<any> {
    return this.http.get<any>(this.blogListUrl, this.httpOptions);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
