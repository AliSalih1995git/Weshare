import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";

export default function Conversation({ conversation, currentUser }) {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser.id);
    const getUser = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/getUser/${friendId}`,
          {
            headers: {
              Authorization: `Bearer ${currentUser.token}`,
            },
          }
        );
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [currentUser, conversation]);
  return (
    <div className="conversation">
      <img className="conversationImg" src={users?.picture} alt="" />
      <span className="conversationName"> {users?.username} </span>
    </div>
  );
}
