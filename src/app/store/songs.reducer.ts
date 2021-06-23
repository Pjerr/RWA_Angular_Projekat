import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Song } from '../models/song';
import * as SongActions from './songs.actions';

export interface SongState extends EntityState<Song> {}

const adapter = createEntityAdapter<Song>();

const initialState: SongState = adapter.getInitialState();

export const songReducer = createReducer(
  initialState,
  on(SongActions.loadSongsSuccess, (state, { songs }) => {
    return adapter.setAll(songs, state);
  })
);
