import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse} from '@angular/common/http';
import {User, Blogger, Blog} from '../models';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class MyLogService {

  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080/blog';

  logListUrl = this.url + '/getBlog';
  logUrl = this.url + '/findBlogByTitleLike';
  authorization = this.getToken();

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': this.authorization != null ? this.authorization : ''
    })
  };

  // 获取日志列表
  getLogList(): Observable<any> {
    return this.http.get<any>(this.logListUrl, {
      headers: new HttpHeaders({
        'Authorization': this.authorization != null ? this.authorization : ''
      })
    });
  }

  // 模糊查询日志
  getLogs(title: string): Observable<any> {
    return this.http.get<any>(this.logUrl, {
      params: new HttpParams().set('title', title),
      headers: new HttpHeaders({
        'Authorization': this.authorization != null ? this.authorization : ''
      })
    });
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
