import { Component, OnInit, Input } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() postList: Post[];

  constructor() {
  }

  ngOnInit() {

  }

}
