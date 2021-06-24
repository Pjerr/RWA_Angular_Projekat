import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { RecordListComponent } from './components/record-list/record-list.component';
import { RecordSongsComponent } from './components/record-songs/record-songs.component';

const routes: Routes = [
  {
    path:'',
    component:RecordListComponent
  },
  {
    path:'songs',
    component:RecordSongsComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
