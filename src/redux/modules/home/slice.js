import { createSlice } from "@reduxjs/toolkit";

const NAME = "article";

const initialState = {
  listArticle: {
    data: null,
    loading: false,
    success: false,
    error: false,
  },
  detailArticle: {
    data: null,
    loading: false,
    success: false,
    error: false,
  },
};

const slice = createSlice({
  initialState,
  name: NAME,
  reducers: {
    getListArticle: (state) => ({
      ...state,
      listArticle: {
        ...initialState.listArticle,
        loading: true,
      },
    }),
    getListArticleSuccess: (state, payload) => ({
      ...state,
      listArticle: {
        data: payload.payload,
        success: true,
        loading: false,
        error: false,
      },
    }),
    getListArticleError: (state, payload) => ({
      ...state,
      listArticle: {
        ...state.listArticle,
        success: false,
        loading: false,
        error: payload,
      },
    }),
    getArticleDetail: (state) => ({
      ...state,
      detailArticle: {
        ...initialState.detailArticle,
        loading: true,
      },
    }),
    getArticleDetailSuccess: (state, payload) => ({
      ...state,
      detailArticle: {
        data: payload.payload,
        success: true,
        loading: false,
        error: false,
      },
    }),
    getArticleDetailError: (state, payload) => ({
      ...state,
      detailArticle: {
        ...state.detailArticle,
        success: false,
        loading: false,
        error: payload,
      },
    }),
  },
});

export const {
  getListArticle,
  getListArticleSuccess,
  getListArticleError,
  getArticleDetail,
  getArticleDetailSuccess,
  getArticleDetailError,
} = slice.actions;

export default slice.reducer;
