import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Record } from '../models/record';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private httpClient:HttpClient) { }

  getAllRecords(){
    return this.httpClient.get<Record[]>(`${environment.apiURL}records`);
  }

  voteForRecord(record:any){
    return this.httpClient.patch<Record>(`${environment.apiURL}records/${record.id}`,{id:record.id, votes:record.votes});
  }
}
