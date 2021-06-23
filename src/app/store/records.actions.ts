import { createAction, props } from '@ngrx/store';
import { Record } from '../models/record';

export const vote = createAction(
  'Vote For Record',
  props<{
    recordID: number;
    voteOutcome: number;
  }>()
);
export const voteForRecordSuccess = createAction("Vote for record success", props<Record>())

export const loadRecordsSuccess = createAction(
  'Load All Records Success',
  props<{
    records: Record[];
  }>()
);

export const loadRecords = createAction(
  'Load All Records'
)
export const selectRecord = createAction(
  'Select Record',
  props<{
    recordID: number;
  }>()
);
