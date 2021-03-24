import React from 'react';
import './VideoCard.css';

const VideoCard = ({ movie }) => {
  return (
    <div className='videoCard'>
      <img
        src='https://images.unsplash.com/photo-1616071906060-1f425a639465?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80'
        alt=''
      />
      <p>This is a film about Mars</p>
      <h2>Movie Title</h2>
      <p>Number of Likes</p>
    </div>
  );
};

export default VideoCard;
