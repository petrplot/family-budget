import React, { useState } from 'react'
import Login from '../components/Login'
import Registration from '../components/Registration'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false)
  const handlerChangeIsLogin = (bool) => {
    setIsLogin(bool)
  }
  return (
    isLogin 
    ? 
    <Login onChangeIsLogin = {handlerChangeIsLogin} />
    : 
    <Registration onChangeIsLogin = {handlerChangeIsLogin}  />
  )
}

export default Auth