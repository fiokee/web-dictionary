import React, {useState} from 'react'
import './search.css';
import { AiOutlineSearch } from 'react-icons/ai';
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
    <div>
        <form className="search-form" role="search" onSubmit={getWord}>
            <input type="search" className="search-input" name="q"
            placeholder="Search for any word..."
             aria-label="Search through site content" required onChange={(e)=> setWordSearch(e.target.value)}/>
                <button onClick={getWord} type='submit' className='search-button'><AiOutlineSearch/></button>
</form>
    </div>
  )
}

export default Search
