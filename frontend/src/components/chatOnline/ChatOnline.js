import './style.css';
import { useState } from 'react';


export default function ChatOnline(onlineUsers,currentId,setCurrentChat) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const [a,seta]=useState
  return (
    <div className="ChatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
          className='chatOnlineImg'
            src="https://res.cloudinary.com/dpnark7pd/image/upload/v1669349105/Alisalih/profile_picture/loxuab43po1wgonl9lqg.jpg"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Alisalihh</span>
      </div>
    </div>
  );
}
