import React, { useState } from 'react';
import './search.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import { TbExternalLink } from 'react-icons/tb';
import Axios from 'axios';

const Search = () => {
    const [data, setData] = useState(null);
    const [searchWord, setWordSearch] = useState("");

    const getWord = (e) => {
        e.preventDefault();
        Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`)
        .then((response) => {
            setData(response.data[0]);
            console.log(response.data[0]);
        }).catch((error) => {
            alert("Please Enter Word:", error);
            console.error("API request error:", error);
        });
    }

    //The audio of the searched word
        const playWord = ()=>{
            //condition to check if the audio exist in the data
            let audio = null;
            if(data && data.phonetics){

                if(data.phonetics[0].audio){
                audio = new Audio(data.phonetics[0].audio);
                }
                
                else if(data.phonetics.length > 1 && data.phonetics[1].audio){
                    audio = new Audio(data.phonetics[1].audio)
                } 
                else if(data.phonetics.length > 2 && data.phonetics[2].audio){
                    audio = new Audio(data.phonetics[2].audio);
                }

                audio.play();
            }
        }


    return (
        <div className='box'>
            <form className="search-form" role="search" onSubmit={getWord}>
                <input
                    type="search"
                    className="search-input"
                    name="q"
                    placeholder="Search for any word..."
                    aria-label="Search through site content"
                    required
                    onChange={(e) => setWordSearch(e.target.value)}
                />
                <button type='submit' className='search-button'><AiOutlineSearch /></button>
            </form>

            {data && (
                <div className='words'>
                    <h1>{data.word}</h1>
                    <span onClick={playWord}><BsFillPlayFill /></span>
                </div>
            )}

            {data && data.phonetic && (
                <div className='phonetics'>
                    <p>{data.phonetic}</p>
                </div>
            )}

            {data && data.meanings && data.meanings.length > 0 && (
                <div>
                    <div className='noun'>
                        {data.meanings[0].partOfSpeech && (
                            <p>{data.meanings[0].partOfSpeech}</p>
                        )}
                        <hr />
                    </div>

                    {data.meanings[0].definitions && data.meanings[0].definitions.length > 0 && (
                        <div>
                            <p className='meaning'>Meaning</p>
                            <ul>
                                {data.meanings[0].definitions.map((definition, idx) => (
                                    <li key={idx}>{definition.definition}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {data.meanings[0].synonyms && data.meanings[0].synonyms.length > 0 && (
                        <div className='synonyms'>
                            <span>synonyms</span>
                            <p>{data.meanings[0].synonyms[0]}</p>
                        </div>
                    )}
                </div>
            )}

            {data && data.meanings && data.meanings.length > 1 && (
                <div>
                    <div className='noun'>
                        {data.meanings[1].partOfSpeech && (
                            <p>{data.meanings[1].partOfSpeech}</p>
                        )}
                        <hr />
                    </div>

                    {data.meanings[1].definitions && data.meanings[1].definitions.length > 0 && (
                        <div>
                            <p className='meaning'>Meaning</p>
                            <ul>
                                {data.meanings[1].definitions.map((definition, idx) => (
                                    <li key={idx}>{definition.definition}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {data.meanings[0].definitions && data.meanings[0].definitions.length > 2 && (
                        <div>
                            <p className='last-meaning'>"{data.meanings[0].definitions[2].definition}"</p>
                        </div>
                    )}
                </div>
            )}

            {data && data.sourceUrls && (
                <div className='source'>
                    <span>Source</span>
                    <a href={data.sourceUrls} target='_blank' >{data.sourceUrls}<TbExternalLink/></a>
                </div>
            )}
        </div>
    )
}

export default Search;
