import React from 'react';
import './VideoCard.css';

function VideoCard({movie}) {
  return (
    <div className='videoCard'>
      
      <img src="https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/04/avengers-endgame-disney-1068x601.jpg"
      alt=""
      />
      <p>This is a film about coding</p>
      <h2>Movie title</h2>
      <p>Number of likes...</p>
      
    </div>
  )
}

export default VideoCard
