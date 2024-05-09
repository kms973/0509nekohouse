
import { Navigate, Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//pages
import { Main } from './pages/main/main';
import { Pokemon } from './pages/pokemon/pokemon';
import { Todo } from './pages/todo/todo';

//components
import { Header } from './components/header/header';


function App() {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route exact path = "/" element={<Navigate to = "/main"/>}/>
      <Route exact path = "/main" element={<Main/>}/>
      <Route exact path = "/pokemon" element={<Pokemon/>}/>
      <Route exact path = "/todo" element={<Todo/>}/>
    </Routes>

    </Router>
  );
}

export default App;
