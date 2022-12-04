import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css';

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  // console.log(currentUser + "currentuser");
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    // console.log(friendId + "fsdf");
    const getUser = async () => {
      try {
        const res = await axios(`${process.env.REACT_APP_BACKEND_URL}/getUser/${user.id}`)
        console.log(res);
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img className="conversationImg" src="https://res.cloudinary.com/dpnark7pd/image/upload/v1669349105/Alisalih/profile_picture/loxuab43po1wgonl9lqg.jpg" alt="" />
      <span className='conversationName' >gfdg</span>
    </div>
  )
}
