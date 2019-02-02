import { Injectable } from '@angular/core';
import { Post } from './app/posts/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(private http: HttpClient) { 


  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);


  }

  private postsUrl = './app/backend/save_posts.php';
}