import { all } from "redux-saga/effects";
import homeSaga from "../modules/home/saga";

export default function* root() {
  yield all([...homeSaga]);
}
