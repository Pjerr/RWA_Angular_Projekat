import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Record } from 'src/app/models/record';
import { RecordVote } from 'src/app/models/recordVote';
import { RecordService } from 'src/app/services/record.service';
import { AppState } from 'src/app/store/app.state';
import { selectAllRecords } from 'src/app/store/records.selectors';
import * as RecordActions from '../../store/records.actions';
@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css'],
})
export class RecordListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  records: Observable<readonly Record[]> = of([]);
  ngOnInit(): void {
    this.store.dispatch(RecordActions.loadRecords());
    this.records = this.store.select(selectAllRecords);
  }

  selectRecord(record: Record) {
    this.store.dispatch(RecordActions.selectRecord({ recordID: record.id }));
  }

  voteForRecord(recordVote: RecordVote) {
    console.log(recordVote);
    this.store.dispatch(
      RecordActions.vote({
        recordID: recordVote.id,
        voteOutcome: recordVote.votes,
      })
    );
  }
}
