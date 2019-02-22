import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextEntryComponent } from './text-entry/text-entry.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'text-entry', component: TextEntryComponent },
  { path: 'posts', component: PostsComponent } 
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {

 



 }

