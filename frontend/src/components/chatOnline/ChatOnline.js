import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function ChatOnline(onlineUsers, currentId, setCurrentChat) {
  const { user } = useSelector((state) => ({ ...state }));
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getFriend/${currentId}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setFriends(res.data);
    };
    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (users) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getFirstSecondConversation/find/${currentId}/${users._id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="ChatOnline">
      {onlineFriends.map((o) => (
        <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                o?.picture
                  ? o.picture
                  : "https://res.cloudinary.com/dpnark7pd/image/upload/v1669349105/Alisalih/profile_picture/loxuab43po1wgonl9lqg.jpg"
              }
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{o?.username}</span>
        </div>
      ))}
    </div>
  );
}
