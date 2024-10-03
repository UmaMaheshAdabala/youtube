import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "live",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.splice(15, 1);
      state.message.unshift(action.payload);
    },
  },
});
export const { addMessage } = liveChatSlice.actions;
export default liveChatSlice.reducer;
