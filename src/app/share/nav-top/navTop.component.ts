import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'share-navTop',
  templateUrl: './navTop.component.html',
  styleUrls: ['./navTop.component.scss']
})

export class NavTopComponent implements OnInit {

  @Input() currentPageName: string; // 当前页面

  constructor() {
  }

  ngOnInit() {
  }
}
