import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordDetailComponent } from './components/record-detail/record-detail.component';
import { RecordListComponent } from './components/record-list/record-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { recordReducer } from './store/records.reducer';
import {songReducer} from "./store/songs.reducer"
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { EffectsModule } from '@ngrx/effects';
import { RecordsEffect } from './store/records.effects';
import { RecordSongsComponent } from './components/record-songs/record-songs.component';
import { SongsEffect } from './store/songs.effects';

@NgModule({
  declarations: [AppComponent, RecordDetailComponent, RecordListComponent, NavBarComponent, ChatRoomComponent, RecordSongsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ records: recordReducer, songs:songReducer }),
    StoreDevtoolsModule.instrument({
      maxAge:25
    }),
    EffectsModule.forRoot([RecordsEffect, SongsEffect])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
