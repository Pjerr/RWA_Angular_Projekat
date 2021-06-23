import { createSelector } from '@ngrx/store';
import { Song } from '../models/song';
import { AppState } from './app.state';
import { SongState } from './songs.reducer';

export const selectSongsFeature = createSelector(
  (state: AppState) => state.songs,
  (songs) => songs,
  (recordID) => recordID
);

export const selectAllSongs = createSelector(
  selectSongsFeature,
  (state: SongState) =>
  {
    return Object.values(state.entities)
    .filter((song) => song != null)
    .map((song) => <Song>song);
  }
);

// export const selectRecordID = createSelector(
//   selectSongsFeature,
//   (state:SongState) => state.selectedRecordID
// );

// export const selectSongs = createSelector(
//     selectAllSongs,
//     selectRecordID,
//     (allSongs, recordID) => {
//         let requestedSongs:Song[] = [];
//         allSongs.forEach(song => {
//             if(song.recordID == recordID) requestedSongs.push(song);
//         });
//         console.log(requestedSongs);
//         return requestedSongs;
//     }
// )
