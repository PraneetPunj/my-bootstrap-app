import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: '', // This will hold the editor content
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setContent(state, action) {
      state.content = action.payload;
    },
  },
});

export const { setContent } = editorSlice.actions;
export default editorSlice.reducer;
