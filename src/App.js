import './App.css';
import React,{Component} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

export default class App extends Component{
  render(){
    return(
      <div>
        <Router>
          <Navbar/>
          <Routes>
            {/*without key Router is not working properly that's why we have to give keys*/}
            <Route excact path='/' element={<News key={1} pageSize={6} country={"in"} category={"general"}/>}/>
            <Route excact path='/business' element={<News key={2}   pageSize={6} country={"in"} category={"business"}/>}/>
            <Route excact path='/entertainment' element={<News key={3}  pageSize={6} country={"in"} category={"entertainment"}/>}/>
            <Route excact path='/general' element={<News key={4}  pageSize={6} country={"in"} category={"general"}/>}/>
            <Route excact path='/health' element={<News key={5}  pageSize={6} country={"in"} category={"health"}/>}/>
            <Route excact path='/science' element={<News key={6}  pageSize={6} country={"in"} category={"science"}/>}/>
            <Route excact path='/sports' element={<News key={7}  pageSize={6} country={"in"} category={"sports"}/>}/>
            <Route excact path='/technology' element={<News key={8}  pageSize={6} country={"in"} category={"technology"}/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
