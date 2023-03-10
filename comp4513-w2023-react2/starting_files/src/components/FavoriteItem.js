
export default function FavoriteItem(props){

    const handleRemove = (e)=>{
        let index = props.favorites.indexOf(props.favorite)
        let newFavorites = [...props.favorites]
        newFavorites.splice(index, 1);
        props.setFavorites(newFavorites) 
    }
    return((
        <div class="item_wrapper">
            <img src={`http://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/${props.favorite.filename}`} class="photoThumb" title={props.favorite.title} alt="pic"/>
            <div class="popover_content"><button class="popover_button" onClick={handleRemove}>Remove</button></div>
         </div>
    ))
}