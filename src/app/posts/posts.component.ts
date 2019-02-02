import { Component, OnInit, Input } from '@angular/core';
import { Post } from './post';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  postList: Post[];

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {

  }

  getPosts() : void {
    this.postsService.getPosts().subscribe(
      postList => this.postList = postList
    );
  }

}



