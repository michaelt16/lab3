import React from "react";
import PhotoThumb from './PhotoThumb.js';

const PhotoList = (props) => {
   if (props.photos.length > 1) {
   return (       
      <article className="photos">
          {props.photos.map( (p) => <PhotoThumb photo={p} key={p.id} setFavorites={props.setFavorites}
                                                showImageDetails={props.showImageDetails} favorites={props.favorites}/> )}              
      </article>
   );
   } else 
      return null;
}
export default PhotoList;
 