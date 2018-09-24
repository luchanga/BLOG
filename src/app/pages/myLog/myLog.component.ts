import {Component, OnInit} from '@angular/core';
import {MyLogService} from '../../sevices/myLog.service';
import {Blog} from '../../models';
import {Router} from '@angular/router';

@Component({
  selector: 'myLog',
  templateUrl: './myLog.component.html'
})

export class MyLogComponent implements OnInit {

  blogs: Blog[] = []; // 博客
  constructor(
    private myLogService: MyLogService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getLogList();
  }

  // 获取博客列表
  getLogList() {
    this.myLogService.getLogList()
      .subscribe(
      (result) => {
        this.blogs = result;
      }
    );
  }

  // 携带id跳转详情页
  viewDetail (id: string) {
    const blogs = this.blogs;
    const blog = blogs.filter(function(item) {
      return item.id === id;
    })[0];
    localStorage.setItem('blog', JSON.stringify(blog));
    this.router.navigateByUrl('/myLog/view');
  }
}
