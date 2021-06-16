import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectRecordsFeature = (state: AppState) => state.records;

export const selectAllRecords = createSelector(
  selectRecordsFeature,
  (state) => state.allRecords
);

export const selectOneRecordID = createSelector(
  selectRecordsFeature,
  (state) => state.selectedRecordID
);

export const selectOneRecord = createSelector(
  selectAllRecords,
  selectOneRecordID,
  (allRecords, recordID) =>
    allRecords.find((record) => record.id === recordID) ?? null
);
