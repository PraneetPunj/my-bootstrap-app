import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk to simulate fetching editor content from a local file
export const fetchEditorContent = createAsyncThunk(
  'editor/fetchEditorContent',
  async () => {
    // Simulate async fetch from a local file (public/mockEditorContent.json)
    const response = await fetch('/mockEditorContent.json');
    if (!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();
    return data.content;
  }
);

const initialState = {
  content: '', // This will hold the editor content
  loading: false,
  error: null,
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setContent(state, action) {
      state.content = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchEditorContent.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEditorContent.fulfilled, (state, action) => {
        state.loading = false;
        state.content = action.payload;
      })
      .addCase(fetchEditorContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setContent } = editorSlice.actions;
export default editorSlice.reducer;
