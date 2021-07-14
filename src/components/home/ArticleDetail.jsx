import Modal from "../common/Modal";
import Loading from "../common/Loading";
import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import "../../styles/home/articleDetail.css";
export default function ArticleDetail(props) {
  const { data, loading } = useSelector(
    (state) => state.homeSlice.detailArticle
  );

  return (
    <>
      {loading && <Loading />}
      {data && (
        <Modal
          closeIcon={true}
          onClose={() => props.onClose && props.onClose()}>
          <div className="media articledetail__item">
            <img src={data.image} className="mr-3 articledetail__image" />
            <div className="media-body">
              <h5 className="mt-0 mb-1">{data.title}</h5>
              <p className="mt-0 mb-1">
                {moment(data.createdAt).format("MM-DD-YYYY")}
              </p>
              <p className="mt-4">{data.content}</p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
