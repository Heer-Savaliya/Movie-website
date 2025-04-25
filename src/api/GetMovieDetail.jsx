import React from 'react'

export const GetMovieDetail = async({params}) => {
    console.log(params);
    const id = params.movieID;
    
    try{
        const res =await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`);
        const data = res.json();
        console.log(data);
        return data;    
        
      }catch(error){
        console.log(error);
        
      }
}
