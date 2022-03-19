import React from 'react'

const Registration = (props) => {
    
  return (
    <div>
        <div className='auth__title'>Регистрация</div>
        <div className='auth__form'>
            <input type='email' placeholder='Введите электроную почту'/>
            <input type='password' placeholder='Введите пароль'/>
            <button>Зарегистрироваться</button>
        </div> 
        <div className='auth__order'>
            <p>Если вы уже зарегистрированы <button onClick={()=>props.onChangeIsLogin(true)} >Авторизируйтесь</button></p>
        </div> 
    </div>
  )
}

export default Registration