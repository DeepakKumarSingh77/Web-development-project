import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
const NewsContent=({category})=>{
    const Api=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=90e33b3959734346acf5721a7c290ef0`
    const [data,updatadata]=useState([]);
    useEffect(()=>{
          axios
              .get(Api)
              .then((response)=>{
                console.log(response.data.articles);
                updatadata(response.data.articles);
              })
              .catch((error)=>{
                console.log(error);
              })
    },[category]);
    return (
        <>
           <div className="text-center h4">Lastest<span className="badge text-bg-danger p-2 m-2">News</span></div>
           <div className="">
           {data.map((data,index )=>{
            return(
                <NewsCard key={index} title={data.title} description={data.description} src={data.urlToImage} url={data.url}/>
            )
           }
           )}
           </div>
           
        </>
    )
}
export default NewsContent;