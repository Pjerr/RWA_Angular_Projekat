import { createSelector } from '@ngrx/store';
import { Record } from '../models/record';
import { AppState } from './app.state';
import { RecordState } from './records.reducer';

export const selectRecordsFeature = createSelector(
  (state: AppState) => state.records,
  (records) => records
);

export const selectAllRecords = createSelector(
  selectRecordsFeature,
  (state: RecordState) =>
    Object.values(state.entities)
      .filter((record) => record != null)
      .map((record) => <Record>record)
);

export const selectAllRecordsAsDict = createSelector(
  selectRecordsFeature,
  (state: RecordState) => state.entities
);

export const selectOneRecordID = createSelector(
  selectRecordsFeature,
  (state: RecordState) => state.selectedRecordID
);

export const selectOneRecord = createSelector(
  selectAllRecordsAsDict,
  selectOneRecordID,
  (allRecords, recordID) => allRecords[recordID] ?? null
);
