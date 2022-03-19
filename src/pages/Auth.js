import React, { useState } from 'react'
import Login from '../components/Login'
import Registration from '../components/Registration'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false)
  const hendlerChangeIslogin = (bool) => {
    setIsLogin(bool)
  }
  return (
    isLogin 
    ? 
    <Login onChangeIsLogin = {hendlerChangeIslogin} />
    : 
    <Registration onChangeIsLogin = {hendlerChangeIslogin}  />
  )
}

export default Auth