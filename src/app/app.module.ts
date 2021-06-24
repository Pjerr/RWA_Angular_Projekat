import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordDetailComponent } from './components/record-detail/record-detail.component';
import { RecordListComponent } from './components/record-list/record-list.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { recordReducer } from './store/records.reducer';
import { songReducer } from './store/songs.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EffectsModule } from '@ngrx/effects';
import { RecordsEffect } from './store/records.effects';
import { RecordSongsComponent } from './components/record-songs/record-songs.component';
import { SongsEffect } from './store/songs.effects';
import { AboutComponent } from './components/about/about.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordDetailComponent,
    RecordListComponent,
    NavBarComponent,
    RecordSongsComponent,
    AboutComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ records: recordReducer, songs: songReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([RecordsEffect, SongsEffect]),
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSliderModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
