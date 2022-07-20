import MangaCard from "./mangaCard";

const MainMangaView = ({mangas}) => {
    console.log(mangas)
    return (
        <div className="manga-view-home">

            <div className="container">
            {
                mangas.map((manga)=>(

                    <MangaCard manga={manga} />
                ))
            }
            </div>
        </div>
        );
}
 
export default MainMangaView;