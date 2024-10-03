import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import liveChatSlice from "./liveChatSlice";
import searchResultsSlice from "./searchResultsSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    live: liveChatSlice,
    searchResults: searchResultsSlice,
  },
});
export default appStore;
