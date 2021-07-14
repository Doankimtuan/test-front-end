import { getListArticleApi, getArticleDetailApi } from "../../../api/home";
import { takeLatest, put, call } from "redux-saga/effects";
import {
  getListArticle,
  getListArticleSuccess,
  getListArticleError,
  getArticleDetail,
  getArticleDetailError,
  getArticleDetailSuccess,
} from "./slice";

function* getListArticleSaga() {
  try {
    const result = yield call(getListArticleApi);
    yield put(getListArticleSuccess(result));
  } catch (error) {
    yield put(getListArticleError(error));
  }
}

function* getArticleDetailSaga(payload) {
  const { id } = payload.payload;
  try {
    const result = yield call(getArticleDetailApi, id);
    yield put(getArticleDetailSuccess(result));
  } catch (error) {
    yield put(getArticleDetailError(error));
  }
}

export default [
  takeLatest(getListArticle, getListArticleSaga),
  takeLatest(getArticleDetail, getArticleDetailSaga),
];
