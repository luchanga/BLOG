import {Component, OnInit} from '@angular/core';
import {MyLogService} from '../../sevices/myLog.service';
import {Blog} from '../../models';

@Component({
  selector: 'myLog',
  templateUrl: './myLog.component.html'
})

export class MyLogComponent implements OnInit {

  blogs: Blog[] = []; // 博客
  constructor(
    private myLogService: MyLogService
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
}
