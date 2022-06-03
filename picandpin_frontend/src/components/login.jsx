import React from 'react'
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import{ FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';


const login = () => {
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}   // no controls its just a backround mp4 file playing and looping in the back of sign up page
          muted // no video sound just mute 
          autoPlay   //allows v.mp4 to play like a video :> 
          />
        </div>
    </div>
  )
}

export default login