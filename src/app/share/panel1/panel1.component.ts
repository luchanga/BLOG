import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'share-panel1',
  templateUrl: './panel1.component.html',
  styleUrls: ['./panel1.component.scss']
})

export class Panel1Component implements OnInit {

  @Input() title: string; // 当前页面

  constructor() {
  }

  ngOnInit() {
  }
}
