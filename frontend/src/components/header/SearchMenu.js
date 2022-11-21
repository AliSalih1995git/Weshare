import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import useClickOutside from '../../helpers/clickOutside';
import { Return, Search } from '../../svg';

function SearchMenu({ color, setShowSearchMenu }) {
    const [iconVisible,setIconVisible]=useState(true)
  const menu = useRef(null);
  const input = useRef(null);
  useClickOutside(menu, () => {
    setShowSearchMenu(false);
  });
useEffect(()=>{
input.current.focus();
},[])

  return (
    <div className="header_left search_area scrollbar" ref={menu}>
      <div className="search_wrap">
        <div className="header_logo">
          <div
            className="circle hover1"
            onClick={() => {
              setShowSearchMenu(false);
            }}
          >
            <Return color={color} />
          </div>
        </div>
        <div
          className="search"
          onClick={() => {
            input.current.focus();
          }}
        >
            {
                iconVisible &&
          <div>
            <Search color={color} />
          </div>
            }
          <input type="text" placeholder="Search..." ref={input} onFocus={()=>{
            setIconVisible(false);
          }}
          onBlur={()=>{
            setIconVisible(true);
          }}
          />
        </div>
      </div>
      <div className="search_history_header">
        <span>Recent Searches</span>
        <a>Edit</a>
      </div>
      <div className="sesarch_history"></div>
      <div className="search_result scrollbar"></div>
    </div>
  );
}

export default SearchMenu;
