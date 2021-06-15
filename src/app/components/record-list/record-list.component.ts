import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Record } from 'src/app/models/record';
import { RecordService } from 'src/app/services/record.service';
import { AppState } from 'src/app/store/app.state';
import { loadRecords } from 'src/app/store/records.actions';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css'],
})
export class RecordListComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private recordService: RecordService
  ) {}

  records: Observable<readonly Record[]> = of([]);
  ngOnInit(): void {

    //ovako ne, ispraviti kasnije
    this.recordService.getAllRecords().subscribe((records)=>{
      this.store.dispatch(loadRecords({records:records}));
    })
    this.records = this.store.select((state) => state.records.allRecords);
  }
}
