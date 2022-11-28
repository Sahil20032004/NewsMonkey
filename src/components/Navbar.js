import React, { Component } from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import {
 Link
} from "react-router-dom";
import './Navbar.css'

export class Navbar extends Component {
 show=()=>{
    console.log("clikced");
    document.querySelector('.containes').style.top='200px';
    document.querySelector('#btn_function').style.top='50px';
  }
  pullfunction = ()=>{
    document.querySelector('.containes').style.top='-50px'
    document.querySelector('#btn_function').style.top='-200px';
  }
  render() {
    return (
      <div>
       <nav>
        <ul>
            <li><Link to='/' className='newsmonkey'>NewsMonkey</Link></li>
        </ul>
            <ul className='category'>
              <li ><Link to='/business'>Business</Link></li>
              <li><Link to='/entertainment'>Entertainment</Link></li>
              <li><Link to='/health'>Health</Link></li>
              <li><Link to='/science'>Science</Link></li>
              <li><Link to='/sports'>Sports</Link></li>
              <li><Link to='/technology'>Technology</Link></li>
            </ul>
            
          <button className='icon' onClick={this.show} ><DensityMediumIcon   fontSize="small"/ ></button>
       </nav>
       <div id='btn_function'>
               <ul >
                 <li><Link onClick={this.pullfunction} to='/business'>Business</Link></li>
                 <li><Link onClick={this.pullfunction} to='/entertainment'>Entertainment</Link></li>
                 <li><Link onClick={this.pullfunction} to='/health'>Health</Link></li>
                 <li><Link onClick={this.pullfunction} to='/science'>Science</Link></li>
                 <li><Link onClick={this.pullfunction} to='/sports'>Sports</Link></li>
                 <li><Link onClick={this.pullfunction} to='/technology'>Technology</Link></li>
               </ul>
            </div>
      </div>
    )
  }
}

export default Navbar
