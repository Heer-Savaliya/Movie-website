import React from 'react'

export const GetApiData = async() => {
  try{
    const res =await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`);
    const data = res.json();
    console.log(data);
    return data;    
    
  }catch(error){
    console.log(error);
    
  }
}
