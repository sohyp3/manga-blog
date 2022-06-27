import useFetch from "../hooks/useFetch";
import MainMangaView from "./mainMangaView";

const HomeView = () => {
    const {data:mangas,isLoading,error} = useFetch("http://localhost:8000/manga");
    console.log(mangas)
    return (
        <div className="home-view">
            {error && <div className="center"> {error}</div>}
            {isLoading && <div className="center">Loading... </div>}
            {mangas && <MainMangaView mangas={mangas} />}

        </div>
    );
}
 
export default HomeView;