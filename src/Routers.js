import React from 'react'
import {Route, Routes} from 'react-router-dom'
import ArticlePage from './pages/ArticlePage'
import ArticlesBudget from './pages/ArticlesBudget'
import Auth from './pages/Auth'
import BudgetList from './pages/BudgetList'
import Page404 from './pages/Page404'

const Routers = () => {
  const userAuth = true
  return (
    userAuth
    ?
    <Routes>
      <Route path={'/articles'} element={<ArticlesBudget/>} />
      <Route path={'/articles/:id'} element={<ArticlePage/>}/>
      <Route path={'/'} element={<BudgetList/>} />
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