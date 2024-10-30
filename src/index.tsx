import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Search from './pages/Search.tsx';
import Movie from './pages/Movie.tsx';
import Home from './pages/Home.js'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element = {<App />}>
          <Route path=':id' element= {<Movie/>} />
          <Route path='/:id' element= {<Movie/>} />
          <Route path='MoviesRating/:id' element= {<Movie/>} />
          <Route path='MoviesRating/movie/:id' element= {<Movie/>} />
          <Route path='/MoviesRating' element = {<Home/>} />
          <Route path='/search' element= {<Search/>} />
        </Route>
      </Routes>
  </BrowserRouter>,
  </React.StrictMode>,
)
