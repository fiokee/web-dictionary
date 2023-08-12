import React, {useState} from 'react'
import './search.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillPlayFill} from 'react-icons/bs';
import { TbExternalLink} from 'react-icons/tb';
import Axios from 'axios';


const Search = () => {
    const [data, setData] = useState(null);
    const [searchWord, setWordSearch] = useState("");
  
// A function to fetch information from the API in a button click
    const getWord = (e)=>{
      e.preventDefault();
      Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
      ).then((response)=>{
        console.log(response.data[0]);

      }).catch((error) => {
        alert("Please Enter Word:", error);
        console.error("API request error:", error);
      });
    }
  return (
    <div className='box'>
        <form className="search-form" role="search" onSubmit={getWord}>
            <input type="search" className="search-input" name="q"
            placeholder="Search for any word..."
             aria-label="Search through site content" required onChange={(e)=> setWordSearch(e.target.value)}/>
                <button onClick={getWord} type='submit' className='search-button'><AiOutlineSearch/></button>
        </form>

        <div className='words'>
          <h1>Keyboard</h1>
          <span><BsFillPlayFill/></span>
        </div>
          <div className='phonetics'>
          <p>/Phonetics/</p>
          </div>
          <div className='noun'>
           <p>noun</p>
           <hr/>
        </div>
        <div>
          <p className='meaning'>Meaning</p>
          <ul>
            <li>dskfskjfsfksakfsakfkafksafdjsfkjsajfkdsakjfkjsfjk</li>
            <li>dskfskjfsfksakfsakfkafksafdjsfkjsajfkdsakjfkjsfjk</li>
            <li>dskfskjfsfksakfsakfkafksafdjsfkjsajfkdsakjfkjsfjk</li>
          </ul>
        </div>

        <div className='synonyms'>
          <span>synonyms</span>
          <p>electronic Keyboard</p>
        </div>
        <div className='noun'>
           <p>verb</p>
           <hr/>
        </div>
        <div>
        <p className='meaning'>Meaning</p>
          <ul>
            <li>dskfskjfsfksakfsakfkafksafdjsfkjsajfkdsakjfkjsfjk</li>
            <p className='last-meaning'>"hgghdhdhhdhdhdhhd"</p>
            </ul>
        </div>
        <hr className='horizontal'/>
        <div className='source'>
        <span>Source</span>
        <p>https://rest-country-app.web.app <TbExternalLink/></p>
        </div>
    </div>
  )
}

export default Search
