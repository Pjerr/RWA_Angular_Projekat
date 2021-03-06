import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Record } from 'src/app/models/record';
import { RecordFavourite } from 'src/app/models/recordFavourite';
import { RecordVote } from 'src/app/models/recordVote';
import { AppState } from 'src/app/store/app.state';
import { selectAllRecords, sortByFavourites } from 'src/app/store/records.selectors';
import * as RecordActions from '../../store/records.actions';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordListComponent implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) {}

  records: Observable<readonly Record[]> = of([]);
  selectedRecord: Observable<Record> = of();
  ngOnInit(): void {
    this.store.dispatch(RecordActions.loadRecords());
    this.records = this.store.select(sortByFavourites);
  }

  selectThisRecord(record: Record) {
    if (record) {
      this.store.dispatch(RecordActions.selectRecord({ recordID: record.id }));
      this.router.navigate(['/songs/'], {
        queryParams: { recordID: record.id },
      });
    }
  }

  voteForRecord(recordVote: RecordVote) {
    this.store.dispatch(
      RecordActions.vote({
        recordID: recordVote.id,
        voteOutcome: recordVote.votes,
      })
    );
  }
  changeFavouriteState(recordFavourite: RecordFavourite) {
    this.store.dispatch(
      RecordActions.favourite({
        recordID: recordFavourite.id,
        favouriteState: recordFavourite.favourite,
      })
    );
  }
}
