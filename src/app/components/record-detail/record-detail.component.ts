import { Component, Input, OnInit, Output } from '@angular/core';
import { Record } from 'src/app/models/record';
import { RecordVote } from 'src/app/models/recordVote';
import { EventEmitter } from '@angular/core';
import { RecordFavourite } from 'src/app/models/recordFavourite';

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.css'],
})
export class RecordDetailComponent implements OnInit {
  @Input() record: Record | undefined;
  @Output() setVotes = new EventEmitter<RecordVote>();

  @Output() selectedRecord = new EventEmitter<Record>();

  @Output() changeFavouriteStateForRecord = new EventEmitter<RecordFavourite>();

  constructor() {}

  ngOnInit(): void {}

  vote(outcome: number) {
    if (this.record) {
      let votes = this.record.votes;
      let id = this.record.id;
      outcome === 1 ? votes++ : votes--;
      let recordVote = {
        id,
        votes,
      };
      this.setVotes.emit(recordVote);
    }
  }

  selectThisRecord() {
    if (this.record) {
      this.selectedRecord.emit(this.record);
    }
  }

  changeFavouriteState(state:string){
    if(this.record)
    {
      let id = this.record.id;
      let favourite = state;
      let recordFavourite = {
        id,
        favourite
      }
      this.changeFavouriteStateForRecord.emit(recordFavourite);
    }
  }

  iconChangeTo:string | undefined = "no";
  changeIconAppearance(state:string){
    if(state==='yes') this.iconChangeTo = 'yes'
    else this.iconChangeTo = 'no'
  }

}
