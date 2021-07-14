import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListArticle as getListArticleAction,
  getArticleDetail as getArticleDetailAction,
} from "../../redux/modules/home/slice";
import Loading from "../common/Loading";
import ArticleDetail from "./ArticleDetail";
import HeaderArticle from "./HeaderArticle";
import { orderBy } from "lodash";
import "../../styles/home/articleList.css";
export default function ArticleList() {
  const dispatch = useDispatch();
  const [openDetail, setOpenDetail] = React.useState();
  const [articleListRender, setArticleListRender] = React.useState([]);
  const { data, loading } = useSelector((state) => state.homeSlice.listArticle);

  React.useEffect(() => {
    dispatch(getListArticleAction());
  }, []);

  React.useEffect(() => {
    setArticleListRender(orderBy(data, ["createdAt"], ["asc"]));
  }, [data]);

  const getDetail = (id) => {
    dispatch(getArticleDetailAction({ id }));
    setOpenDetail(true);
  };

  const onSearch = (e) => {
    let searchItem = data.filter((val) => {
      if (e.target.value === "") {
        return val;
      } else if (
        val.title.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return val;
      }
    });
    setArticleListRender(searchItem);
  };

  const onSort = (e) => {
    let result = [];
    if (e.target.value === "new")
      result = orderBy(data, ["createdAt"], ["asc"]);
    else result = orderBy(data, ["createdAt"], ["desc"]);
    setArticleListRender(result);
  };

  return (
    <>
      {openDetail && <ArticleDetail onClose={() => setOpenDetail(false)} />}
      {loading && <Loading label="Chào mừng bạn đến với Nal Solution Blogs" />}

      <div className="articleList__container">
        <HeaderArticle onSearch={onSearch} onSort={onSort} />
        <ul className="list-unstyled">
          {articleListRender &&
            articleListRender.map((element) => (
              <li
                className="media articleList__item"
                key={element.id}
                onClick={() => getDetail(element.id)}>
                <img src={element.image} className="mr-3 articleList__image" />
                <div className="media-body">
                  <h5 className="mt-0 mb-1">{element.title}</h5>
                  {element.content}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
