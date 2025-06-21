import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume', component: ResumeComponent }
];