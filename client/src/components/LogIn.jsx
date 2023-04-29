import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
// 42:00
const LogIn = () => {
  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>...

    </GoogleOAuthProvider>
  )
}

export default LogIn