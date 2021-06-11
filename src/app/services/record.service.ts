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
}
