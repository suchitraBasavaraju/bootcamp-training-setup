import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {GitHubActionComponent} from "./git-hub-action/git-hub-action.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'github-repo', component: GitHubActionComponent },
];
