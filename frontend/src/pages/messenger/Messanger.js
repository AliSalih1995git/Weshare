import './style.css';
import Header from '../../components/header';
import Conversation from '../../components/conversation/Conversation';
import Message from '../../components/messege/Message';
import ChatOnline from '../../components/chatOnline/ChatOnline';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from "axios";

export default function Messanger() {
  const { user } = useSelector((state) => ({ ...state }));
  
console.log(`${user.id}`)
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/conversation/${user.id}`).then((res)=>{
          console.log(res);

        })
        // JSON.stringyfy(res)
        // setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user.id]);

  return (
    <>
      <Header page="home" />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            {conversations.map((c)=>(

            <Conversation conversation={c} currentUser={user} />
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message />
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="write somthing.."
              ></textarea>
              <button className="chatSubmitButton">send</button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}
