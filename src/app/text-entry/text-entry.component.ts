import { Component, OnInit } from '@angular/core';
import { PostEdit } from './post-edit';

@Component({
  selector: 'app-text-entry',
  templateUrl: './text-entry.component.html',
  styleUrls: ['./text-entry.component.css']
})
export class TextEntryComponent implements OnInit {

  constructor() { 
    this.postEntry = new PostEdit();
  }

  ngOnInit() {
  }

  postEntry: PostEdit;

}
