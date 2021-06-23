import { RecordState } from "./records.reducer";
import { SongState } from "./songs.reducer";

export interface AppState{
    records: RecordState,
    songs:SongState
}