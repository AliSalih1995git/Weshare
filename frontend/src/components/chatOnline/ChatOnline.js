import './style.css';

export default function ChatOnline() {
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
        <span className="chatOnlineName">Alisali</span>
      </div>
    </div>
  );
}
