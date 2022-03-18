import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Auth from './pages/Auth'
import BudgetList from './pages/BudgetList'
import CreatingRecord from './pages/CreatingRecord'
import Main from './pages/Main'
import Page404 from './pages/Page404'

const Routers = () => {
  const userAuth = false
  return (
    userAuth
    ?
    <Routes>
      <Route path={'/'} element={<Main/>} />
      <Route path={'/creatingrecord'} element={<CreatingRecord/>}/>
      <Route path={'/budgetlist'} element={<BudgetList/>} />
      <Route path={'*'} element={<Page404/>} />
    </Routes>
    :
    <Routes>
      <Route path={'/'} element={<Auth/>} />
      <Route path={'*'} element={<Page404/>} />
    </Routes>
  )
}

export default Routers