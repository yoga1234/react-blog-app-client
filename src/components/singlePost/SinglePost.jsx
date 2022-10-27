import "./SinglePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet{" "}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:&nbsp;
            <b>Yogasmara</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
          aspernatur dolorem doloremque, culpa itaque nobis earum atque
          asperiores officiis! Recusandae repudiandae, rerum aspernatur
          consequatur esse corporis eveniet vero deserunt iure. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. At aspernatur dolorem
          doloremque, culpa itaque nobis earum atque asperiores officiis!
          Recusandae repudiandae, rerum aspernatur consequatur esse corporis
          eveniet vero deserunt iure. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. At aspernatur dolorem doloremque, culpa itaque nobis
          earum atque asperiores officiis! Recusandae repudiandae, rerum
          aspernatur consequatur esse corporis eveniet vero deserunt iure.
        </p>
      </div>
    </div>
  );
}
