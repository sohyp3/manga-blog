import { useState } from "react";
import useFetch from "../hooks/useFetch";
import MangaCard from "./mangaCard";


const SearchView = () => {

    const [searchBar, setSearchBar] = useState('');
    const {data:mangas,isLoading,error} = useFetch("http://localhost:8000/manga");
    const [searchResult, setSearchResult] = useState([]);

    const searchHandler = (e)=>{
        setSearchBar(e.target.value)

    // half working search function or its a feature not a bug
        mangas.forEach(manga =>{
            let found = false;
            manga.otherNames.forEach(othername =>{
                if (othername.toLowerCase().includes(searchBar)){
                    found = true;
                }
            })
            if (manga.title.toLowerCase().includes(searchBar)){
                found= true
            }

            if (found){
                setSearchResult([
                    manga
                ]);
            }
        })
    }

    return ( 
            <div className="all-view">
                <div className="search">
                    <input 
                        placeholder="Search for Manga"
                        value={searchBar}
                        onChange={searchHandler}
                    />
                </div>
                
                {error && <div className="center"> {error}</div>}
                {isLoading && <div className="center">Loading... </div>}
                
                    {
                        <div className="container"> 
                        {
                            searchResult.map((result) => (
                                <MangaCard manga={result} />
                            ))
                        }
                        </div>
                    }
            </div>
        
        );
    }
 
export default SearchView;
