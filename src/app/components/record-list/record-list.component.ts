import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Record } from 'src/app/models/record';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  constructor(private recordService:RecordService) { }

  records:Observable<Record[]> = of([]);
  ngOnInit(): void {
    this.records = this.recordService.getAllRecords();
  }

}
