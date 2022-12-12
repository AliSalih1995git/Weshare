import "./style.css";
import { format } from "timeago.js";

export default function Message({ message, own, user }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png"
          alt=""
        />
        <p className="messageText">{message.text} </p>
      </div>
      <div className="messageBottom">{format(message.createdAt)} </div>
    </div>
  );
}
