import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Blog} from '../../../models';

@Component({
  selector: 'myLog-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class MyLogViewComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute) {
  }

  blog: Blog = new Blog();

  ngOnInit() {
    // this.activatedRoute.params.subscribe((params) => {
    //
    // })
    this.blog = JSON.parse(localStorage.getItem('blog'));
  }
}
