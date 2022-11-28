import React, { Component } from 'react'
import './NewsItem.css'
export default class NewsItem extends Component {
  render() {
    let {title,description,imageurl,url}=this.props;
    return (
      <div>
          <div className='news'>
            <img src={imageurl?imageurl:"https://images.moneycontrol.com/static-mcnews/2021/12/Inflation_shutterstock_336372560-770x433.jpg"} alt='These are the images of the articles'/>
            <p><h3>{title}...</h3></p>
            <p>{description}...</p>
            <a href={url} className='button' target="_blank" rel="noreferrer">Read More...</a>    
          </div>
      </div>
    )
  }
}
