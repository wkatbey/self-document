import { Injectable } from '@angular/core';
import { Post } from './app/posts/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.loadPostsUrl);
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.savePostUrl, post, this.httpOptions);
  }

  private loadPostsUrl = './src/app/backend/load-posts.php';
  private savePostUrl = './app/backend/save-post.php';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}