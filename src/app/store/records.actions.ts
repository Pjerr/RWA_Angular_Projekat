import { createAction, props } from '@ngrx/store';
import { Record } from '../models/record';

export const vote = createAction(
  'Vote For Record',
  props<{
    recordID: number;
    voteOutcome: number; //-1 ili +1
  }>()
);

export const loadRecords = createAction(
  'Load All Records',
  props<{
    records: Record[];
  }>()
);

export const selectRecord = createAction(
  'Select Record',
  props<{
    recordID: number;
  }>()
);
