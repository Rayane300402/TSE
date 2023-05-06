import React from 'react'
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logoWhite.png';
import jwt_decode from "jwt-decode";

import { client } from '../client';


const LogIn = () => {



  const navigate = useNavigate();

  const responseGoogle = async (response) => {
    const decoded = jwt_decode(response.credential);
    console.log(decoded);
    const { name, sub, picture } = decoded;
    const doc = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture,
    };

    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true });
    });
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <GoogleOAuthProvider clientId='240941726218-41e781fhbm422r5v8t6gt9gjokinjc28.apps.googleusercontent.com'>
      <div className="flex justify-start items-center flex-col h-screen">
        <div className=" relative w-full h-full">
          <video
            src={shareVideo}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className="w-full h-full object-cover"
          />

          <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
            <div className="">
              <img src={logo} width="130px" />
            </div>

            <div className="shadow-2xl -mt-5">
              <GoogleLogin

                onSuccess={responseGoogle}
                onError={onFailure}

              />
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}

export default LogIn