import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { iif, Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Record } from 'src/app/models/record';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';
import { AppState } from 'src/app/store/app.state';
import { selectOneRecord } from 'src/app/store/records.selectors';
import { loadSongs, loadSongsSuccess } from 'src/app/store/songs.actions';
import { selectAllSongs } from 'src/app/store/songs.selectors';
import * as SongActions from '../../store/songs.actions'; 
import * as SongSelectors from '../../store/songs.selectors'; 

@Component({
  selector: 'app-record-songs',
  templateUrl: './record-songs.component.html',
  styleUrls: ['./record-songs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordSongsComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    // private route:ActivatedRoute,
  ) {}

  selectedRecord: Record | undefined;
  songs: Observable<Song[]> = of([]);

  ngOnInit(): void {

    // const idString = this.route.snapshot.queryParamMap.get("recordID");
    // let id = idString != null ? +idString : -1;

    this.store.select(selectOneRecord).subscribe((record)=>{
      this.selectedRecord = record;
    });

    if(this.selectedRecord)
      this.store.dispatch(SongActions.loadSongsOfRecord({recordID:this.selectedRecord?.id}));

    this.songs = this.store.select(SongSelectors.selectAllSongs);
  }
}
