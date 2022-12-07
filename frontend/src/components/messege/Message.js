import './style.css';

export default function Message({own}) {
  return (
    <div className={own ? "message own":"message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://res.cloudinary.com/dpnark7pd/image/upload/v1669349105/Alisalih/profile_picture/loxuab43po1wgonl9lqg.jpg"
          alt=""
        />
        <p className="messageText">Helo this is message</p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}
