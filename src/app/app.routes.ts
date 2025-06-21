import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'blog', component: BlogComponent}
];