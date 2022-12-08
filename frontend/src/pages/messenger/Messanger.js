import './style.css';
import Header from '../../components/header';
import Conversation from '../../components/conversation/Conversation';
import Message from '../../components/messege/Message';
import ChatOnline from '../../components/chatOnline/ChatOnline';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import axios from "axios";

export default function Messanger() {
  const { user } = useSelector((state) => ({ ...state }));
  
console.log(`${user.id}`)
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const scrollRef = useRef();

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res=await axios.get(`${process.env.REACT_APP_BACKEND_URL}/conversation/${user.id}`,{
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setConversations(res.data);
  
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user.id]);
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`/messageGet/${currentChat?._id}`);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Header page="home" />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            {conversations.map((c)=>(
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
                </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">

            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
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
