import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "user",
  initialState: {
    toggle: false,

    open: false,
    id: "",
  },
  reducers: {
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },

    setOpen: (state, action) => {
      state.open = action.payload;
    },
    getId: (state, action) => {
      state.id = action.payload;
    },
  },
});
export const { setToggle, setOpen, getId } = Slice.actions;
export default Slice.reducer;
