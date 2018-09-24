import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MyLogService} from '../../sevices/myLog.service';
import {Blog} from '../../models';

@Component({
  selector: 'lu-search',
  template: '<div class="search_container"><input type="text" placeholder="请输入关键字" name="search" [(ngModel)]="value">' +
  '<input type="button" value="搜索" (click)="onClick()"></div>',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  value: string; // 搜索关键字
  @Output() search: EventEmitter<any> = new EventEmitter();

  constructor(
    private myLogService: MyLogService
  ) {
  }

  ngOnInit() {

  }

  onClick(): void {
    this.myLogService.getLogs(this.value).subscribe((result) => {
        this.search.emit(result);
      }
    );
  }

}
