import useFetch from "../hooks/useFetch";
import MainMangaView from "./mainMangaView";


const HomeView = () => {

    // http://localhost:8000/manga
    //"http://127.0.0.1:8000/api?format=json"
    const {data:mangas,isLoading,error} = useFetch('http://localhost:8000/manga');

    // console.log(mangas)
    return (

        <div className="home-view">
            {error && <div className="center"> {error}</div>}
            {isLoading && <div className="center">Loading... </div>}
            {mangas && <MainMangaView mangas={mangas} />}
        </div>

    );
}
 
export default HomeView;