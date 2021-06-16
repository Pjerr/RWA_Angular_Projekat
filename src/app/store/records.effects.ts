import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { RecordService } from '../services/record.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as RecordActions from './records.actions';

@Injectable()
export class RecordsEffect {
  constructor(
    private recordService: RecordService,
    private actions$: Actions
  ) {}

  loadEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecordActions.loadRecords),
      mergeMap(() =>
        this.recordService.getAllRecords().pipe(
          map((records) => RecordActions.loadRecordsSuccess({ records })),
          catchError(() => of({ type: 'load error' }))
        )
      )
    )
  );
}
