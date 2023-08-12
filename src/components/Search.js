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
        setData(response.data[0])
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
    {
      data && (

            <div className='words'>
              <h1>{data.word}</h1>
              <span><BsFillPlayFill/></span>
            </div>
      )
    }

    {
      data && (
        <div>
          <div className='phonetics'>
          <p>{data.phonetic}</p>
          </div>
          <div className='noun'>
           <p>{data. meanings[0].partOfSpeech}</p>
           <hr/>
        </div>
        </div>
      )
    }

    {data && (

        <div>
          <p className='meaning'>Meaning</p>
          <ul>
            <li>{data.meanings[0].definitions[0].definition}</li>
            <li>{data.meanings[0].definitions[1].definition}</li>
            <li>{data.meanings[0].definitions[2].definition}</li>
          </ul>
        </div>
    )}

  {
    data && (

          <div className='synonyms'>
            <span>synonyms</span>
            <p>{data.meanings[0].synonyms[0]}</p>
          </div>
    )
  }

    {
      data && (
        <div>
          <div className='noun'>
            <p>{data. meanings[1].partOfSpeech}</p>
            <hr/>
          </div>
          <div>
          <p className='meaning'>Meaning</p>
            <ul>
              <li>{data.meanings[1].definitions[0].definition}</li>
              <p className='last-meaning'>"{data.meanings[0].definitions[1].definition}"</p>
              </ul>
          </div>
          </div>
      )
    }
        <hr className='horizontal'/>

{data && (

        <div className='source'>
        <span>Source</span>
        <a href=''>{data.sourceUrls} <TbExternalLink/></a>
        </div>
)}

    </div>
  )
}

export default Search
