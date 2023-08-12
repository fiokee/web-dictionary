import React, { Fragment } from 'react'
import { BiBook } from 'react-icons/bi';
import { BsChevronDown, BsToggleOn} from 'react-icons/bs';
import { HiOutlineMoon} from 'react-icons/hi';
import './header.css'
import Search from './Search';

const Header = () => {
  return (
    <Fragment>
    <div className='container'>
        <h1>Web Dictionary</h1>
        <div className='navbar_box'>
        <span className='book'><BiBook/></span>
      <ul className='navbar'>
        <li>Serif<span><BsChevronDown/></span></li>
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
