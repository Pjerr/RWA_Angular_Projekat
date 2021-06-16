import { createReducer, on } from '@ngrx/store';
import { Record } from '../models/record';
import * as RecordActions from './records.actions';

export interface RecordState {
  selectedRecordID: number;
  allRecords: ReadonlyArray<Record>;
}

export const initialState: RecordState = {
  selectedRecordID: -1,
  allRecords: [],
};

export const recordReducer = createReducer(
  initialState,
  on(RecordActions.vote, (state, { recordID, voteOutcome }) => ({
    ...state,
    allRecords: state.allRecords?.map((record) =>
      record.id === recordID ? { ...record, votes: voteOutcome } : record
    ),
  })),
  on(RecordActions.loadRecords, (state, { records }) => ({
    ...state,
    allRecords: records,
  })),
  on(RecordActions.selectRecord, (state, { recordID }) => ({
    ...state,
    selectedRecordID: recordID,
  }))
);
