import { useState } from "react";
import useFetch from "../hooks/useFetch";

import searchIcon from "../icons/search.svg";

const SearchView = () => {

    const [searchBar, setSearchBar] = useState('');
    const {data:mangas,isLoading,error} = useFetch("http://localhost:8000/manga");
    const [searchResult, setSearchResult] = useState([]);

    const searchHandler = (e)=>{
        setSearchBar(e.target.value)

        console.log(searchResult)

        // let found = mangas.map((manga)=>(manga.title.find(e => e == searchBar)))
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
                    {/* <img 
                    src={searchIcon}
                    alt='search'
                    // onClick={searchHandler}
                    /> */}

                </div>
                    <h1></h1>

            </div>
        
        );
}
 
export default SearchView;
