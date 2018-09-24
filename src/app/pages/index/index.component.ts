import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Blog, Blogger} from '../../models';
import {MyLogService} from '../../sevices/myLog.service';

@Component({
  selector: 'index',
  templateUrl: './index.component.html'
})

export class IndexComponent implements OnInit {


  blogs: Blog[] = []; // 博客
  blogger: Blogger = JSON.parse(localStorage.getItem('currentUser'));
  constructor(
    private myLogService: MyLogService,
    private router: Router) {
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

  // 触发查询按钮
  onSearchClick (blogs: Blog[]) {
    console.log(blogs);
    this.blogs = blogs;
  }
}
