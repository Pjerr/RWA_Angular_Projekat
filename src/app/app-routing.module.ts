import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
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
    path:'chat',
    component:ChatRoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
