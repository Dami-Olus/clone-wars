import { Movie } from '@material-ui/icons';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import axios from './axios'
import requests from './requests';


function Results() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(requests.fetchAnimation);
      setMovies(request.data.results);
      return requests;

    }

    fetchData();

  },[])

  return (
    <div className='results'>
      {movies.map((movie)=>(
          <VideoCard movie={movie} />
      ))}
      

      
    </div>
  )
}

export default Results