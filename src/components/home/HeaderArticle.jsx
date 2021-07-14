import logo from "../../assets/image/logo.png";
export default function HeaderArticle(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <img src={logo} alt="" style={{ width: 150 }} />
      <div style={{ width: "50%" }}>
        <div style={{ position: "relative" }}>
          <i
            className="fas fa-search"
            style={{ position: "absolute", top: 14, left: 20 }}></i>
          <input
            type="text"
            className="form-control px-5"
            placeholder="Nhập title Blogs"
            onChange={(e) => props.onSearch(e)}></input>
        </div>
        <select onChange={(e) => props.onSort(e)} className="articleList__sort">
          <option value="new">Sắp xếp theo bài viết mới nhất</option>
          <option value="old">Sắp xếp theo bài viết cũ nhất</option>
        </select>
      </div>
    </div>
  );
}
