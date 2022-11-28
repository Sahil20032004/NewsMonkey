
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';

export default class App extends Component {
  
   //c="hello world this is class based component using this leyword for rendering";
   apikey=process.env.REACT_APP_NEWS_API
  render() {  
    return (
     <Router>
        <div>
         <Navbar/>
          <Routes>
             <Route  exact path='/' element={<News apikey={this.apikey} key='general' pageSize={20} category='general' />}/>
             <Route  exact path='/business' element={<News apikey={this.apikey} key='business' pageSize={20} category='business'/>}/>
             <Route  exact path='/entertainment' element={<News apikey={this.apikey} key='entertainment' pageSize={20} category='entertainment'/>}/>
             <Route  exact path='/health' element={<News apikey={this.apikey} key='health' pageSize={20} category='health'/>}/>
             <Route  exact path='/science' element={<News apikey={this.apikey} key='science' pageSize={20} category='science'/>}/>
             <Route exact path='/sports' element={<News apikey={this.apikey} key='sports' pageSize={20} category='sports'/>}/>
             <Route exact path ='/technology' element={<News apikey={this.apikey} key='technology' pageSize={20} category='technology'/>}/>
          </Routes>
        </div>
     </Router>           
    )
  }
}
