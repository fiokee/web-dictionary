import React, { Fragment, useState } from 'react'
import { BiBook } from 'react-icons/bi';
import { BsChevronDown, BsToggleOn} from 'react-icons/bs';
import { HiOutlineMoon} from 'react-icons/hi';
import './header.css'
import Search from './Search';
import FontSelector from './FontSelector';

const Header = () => {
  const [selectFont, setSelectFont] = useState('Serif');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleFontChange = (newFont) =>{
    setSelectFont(newFont)
  }

  //dark mode
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <Fragment>
    <div className='container'>
        <h1>Web Dictionary</h1>
        <div className='navbar_box'>
        <span className='book'><BiBook/></span>
      <ul className='navbar'>
        <li><FontSelector onSelectFont={handleFontChange}/></li>
        <li><span><BsToggleOn/></span></li>
        <li><span><HiOutlineMoon/></span></li>
      </ul>
      </div>
    </div>
      <Search/>
    </Fragment>
  )
}

export default Header
