import React from 'react'
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import{ FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/picandpinLogo.png';


const login = () => {

  const responseGoogle= (response) => {
        console.log(response);

  }

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
          className="w-full h-full object-cover"
          />

          <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0  bg-blackOverlay">
            <div className="p-5">
              <img src={logo} width="130px" alt="logo"/>
              </div>

              <div className="shadow-2xl">
                <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}  //this will populate the clientId    process.env.REACT_APP_GOOGLE_API_TOKEN      
                render= {(renderProps) => (
                  <button
                    type="button"
                    className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none "
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                       >
                        
                      <FcGoogle className="mr-4"/> Sign in with Google 


                  </button>

                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
                />

                 

            </div>
          </div>
        </div>
    </div>
  ) 
}

export default login