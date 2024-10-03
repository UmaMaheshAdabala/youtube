import { createSlice } from "@reduxjs/toolkit";

const searchResultsSlice = createSlice({
  name: "searchResulte",
  initialState: {
    results: null,
  },
  reducers: {
    addResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { addResults } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
