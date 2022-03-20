import React from 'react'

const Login = (props) => {
  return (
    <div>
        <div className='auth__title'>Авторизация</div>
        <div className='auth__form'>
            <input type='email' placeholder='Введите электроную почту'/>
            <input type='password' placeholder='Введите пароль'/>
            <button>Вход</button>
        </div>
        <div className='auth__order'>
            <p>Если вы еще не зарегистрированы 
              <button onClick={()=>props.onChangeIsLogin(false)} >
                Зарегистрируйтесь
              </button>
            </p>
        </div> 
    </div>
  )
}

export default Login