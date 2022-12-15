import './style.css';
import {format} from "timeago.js";

export default function Message({message,own}) {
  return (
    <div className={own ? "message own":"message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://res.cloudinary.com/dpnark7pd/image/upload/v1669349105/Alisalih/profile_picture/loxuab43po1wgonl9lqg.jpg"
          alt=""
        />
        <p className="messageText">{message.text} </p>
      </div>
      <div className="messageBottom">{format(message.createdAt)} </div>
    </div>
  );
}
