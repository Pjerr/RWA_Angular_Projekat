import { Component, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Record } from 'src/app/models/record';
import { RecordVote } from 'src/app/models/recordVote';
import { AppState } from 'src/app/store/app.state';
import { EventEmitter } from '@angular/core';
import * as RecordActions from '../../store/records.actions';
@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.css'],
})
export class RecordDetailComponent implements OnInit {
  @Input() record: Record | undefined;
  @Output() setVotes = new EventEmitter<RecordVote>();
  constructor() {}

  ngOnInit(): void {}

  vote(outcome: number) {
    if(this.record)
    {
      let votes = this.record.votes;
      let id = this.record?.id;
      outcome === 1? votes++ : votes--;
      let recordVote = {
        id,
        votes
      }
      this.setVotes.emit(recordVote);
    }
  }
}
