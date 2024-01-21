import React from "react";
import imgp from "../components/images/imgp.webp";
const NewsCard=({title,description,src,url})=>{
    return(
        <>
           <div className="card bg-dark text-light  d-inline-block mx-3 my-3 px-4 py-4" style={{width: "22rem"}}>
  <img src={src||"https://img.freepik.com/free-photo/3d-rendering-illustration-letter-blocks-forming-word-news-white-background_181624-60840.jpg"||imgp} className="card-img-top " alt="image" style={{width:"300px", height:"200px"}}/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"The third song from Siddharth Anand's aerial action film Fighter is an ode to air force pi"}</p>
    <a href={url} className="btn btn-primary">Click To Know More</a>
  </div>
</div>
        </>
    )
}
export default NewsCard;