import { Component, OnInit } from '@angular/core';
import { PostEdit } from './post-edit';
import { Post } from '../posts/post';

@Component({
  selector: 'app-text-entry',
  templateUrl: './text-entry.component.html',
  styleUrls: ['./text-entry.component.css']
})
export class TextEntryComponent implements OnInit {

  constructor() { 
    this.postEntry = new PostEdit();
    this.displayPostsView = true;
    this.postList = new Array();
  }

  ngOnInit() {
  }

  createPostFromEntry() {
    let currentDate = "11/11/2011";
    let text = this.postEntry.getText();
  

    let post = new Post(currentDate, text);
    
    return post;
  }

  clearEntry() {
    this.postEntry.clear();
  }

  submitPost() {
    let post = this.createPostFromEntry();
    this.postList.push(post);
  }

  displayPostsView: boolean;
  postEntry: PostEdit;
  postList: Post[];
}
