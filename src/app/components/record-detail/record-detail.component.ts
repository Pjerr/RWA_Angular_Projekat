import { Component, Input, OnInit } from '@angular/core';
import { Record } from 'src/app/models/record';

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.css']
})
export class RecordDetailComponent implements OnInit {

  @Input() record: Record | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
