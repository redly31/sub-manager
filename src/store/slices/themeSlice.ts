// themeSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateThemeColor } from '../../helpers/updateThemeColor';
import { IColor } from '../../models/ITheme';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    tailwindColor: 'bg-amber-600',
    cssColor: '#d97706',
    tailwindColorHover: 'bg-amber-800',
    cssColorHover: '#92400e',
  } as IColor,
  reducers: {
    setThemeColor: (state, action: PayloadAction<IColor>) => {
      state.tailwindColor = action.payload.tailwindColor;
      state.cssColor = action.payload.cssColor;
      state.tailwindColorHover = action.payload.tailwindColorHover;
      state.cssColorHover = action.payload.cssColorHover;
      updateThemeColor(state.cssColor, state.cssColorHover);
    },
  },
});

export const { setThemeColor } = themeSlice.actions;

export default themeSlice.reducer;
