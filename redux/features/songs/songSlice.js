import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songList: "",
  currentSong: "",
  isPlaying: false,
};

export const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
      state.isPlaying = true;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { setCurrentSong, setIsPlaying } = songSlice.actions;

export default songSlice.reducer;
