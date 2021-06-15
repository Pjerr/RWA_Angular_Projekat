import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordDetailComponent } from './components/record-detail/record-detail.component';
import { RecordListComponent } from './components/record-list/record-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { recordReducer } from './store/records.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';

@NgModule({
  declarations: [AppComponent, RecordDetailComponent, RecordListComponent, NavBarComponent, ChatRoomComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ records: recordReducer }),
    StoreDevtoolsModule.instrument({
      maxAge:25
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
