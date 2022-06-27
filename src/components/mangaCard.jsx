const MangaCard = ({manga}) => {
    return (
        <div className="manga">
            <div>
              <img src ={manga.poster} alt = {manga.title}/>
            </div>
            <div>
              <span>{manga.chapters} chapters</span>
              <h3>{manga.title}</h3>
            </div>    
        </div>
    );
}
 
export default MangaCard;