import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Record } from 'src/app/models/record';
import { RecordVote } from 'src/app/models/recordVote';
import { AppState } from 'src/app/store/app.state';
import { selectAllRecords, selectOneRecord } from 'src/app/store/records.selectors';
import * as RecordActions from '../../store/records.actions';
import * as SongActions from '../../store/songs.actions'
@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RecordListComponent implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) {}

  records: Observable<readonly Record[]> = of([]);
  selectedRecord: Observable<Record> = of();
  ngOnInit(): void {
    this.store.dispatch(RecordActions.loadRecords());
    this.records = this.store.select(selectAllRecords);
  }

  selectRecord(record: Record) {
    this.store.dispatch(RecordActions.selectRecord({ recordID: record.id }));
    this.router.navigate(['/songs/'],{queryParams:{recordID:record.id}});
  }

  voteForRecord(recordVote: RecordVote) {
    this.store.dispatch(
      RecordActions.vote({
        recordID: recordVote.id,
        voteOutcome: recordVote.votes,
      })
    );
  }
}
