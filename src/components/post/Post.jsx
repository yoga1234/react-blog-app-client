import "./Post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem Ipsum Dolor Sit Amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
        consectetur repellat omnis deleniti aspernatur sit labore quam earum
        iste, nobis nostrum optio ipsa magnam perferendis placeat officiis,
        nulla eligendi unde?
      </p>
    </div>
  );
}
