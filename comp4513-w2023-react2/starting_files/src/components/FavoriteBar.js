import FavoriteItem from "./FavoriteItem"
import {useState} from "react";
export default function FavoriteBar(props){
const [isVisible, setIsVisible] = useState(true);
const handleHide = (e)=>{
    isVisible?  setIsVisible(false):setIsVisible(true)
}
return(<div className="favorites">
    
    <button onClick={handleHide}> ❤ Favorites</button>
    
            {console.log("my favorited movies are",props.favorites)}
            {isVisible && props.favorites.map((f)=>{return <FavoriteItem favorite={f} key={f.id} favorites={props.favorites} setFavorites={props.setFavorites}/>})}
    
       </div>)



}