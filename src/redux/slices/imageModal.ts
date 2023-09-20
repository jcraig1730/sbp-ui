import { Photo } from "@/api/dtoTypes";
import { createSlice } from "@reduxjs/toolkit";

export interface ImageModalState {
  showImage: boolean;
  imageToShow: Photo | null;
}

const initialState: ImageModalState = {
  showImage: true,
  imageToShow: null,
};

const imageModalSlice = createSlice({
  name: "imageModal",
  initialState,
  reducers: {
    showImageModal: (state, action: { payload: Photo }) => {
      state.imageToShow = action.payload;
      state.showImage = true;
    },
    hideImageModal: (state) => {
      state.showImage = false;
      state.imageToShow = null;
    },
  },
});

export const { showImageModal, hideImageModal } = imageModalSlice.actions;
export default imageModalSlice.reducer;
