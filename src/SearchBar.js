import React from "react";
import {AiOutlineSearch} from 'react-icons/ai';

const SearchBar = ({setSearchText}) => {
  return (
    <div className="search">
      <AiOutlineSearch className="icon-search" size="1.3em"/>
      <input onChange={(e) => setSearchText(e.target.value)} style={{marginLeft:"4px"}} type={"text"} placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
