import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem';
import Spinner from './Spinner'
import './News.css'
import './Button.css'
import './Navbar.css'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

  static defaultProps = {
    category: 'general',
    pageSize: 10
  }
  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor(props) {  //constructor will be read first then the render function and then componenetdidmount will be read
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    { document.title = `NewsMonkey-${this.capitalizer(this.props.category)}` }
  }
  async updatenews() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true }) //spinner can be seen
    let data = await fetch(url);  //whenever we fetch for the api it will return a promise regardign the api key.
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false  //spinner cannot be seen
    });
  }

  async componentDidMount() {  //fetching the api key
    this.updatenews();
  }
  capitalizer = (word) => { //for making the first letter of the category capital
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    })
  }
  render() {
    return (
      <div className='containes'>
        <h2>NewsMonkey - Top HeadLines on {this.capitalizer(this.props.category)} headlines</h2>
        {/*when the loading is true show the spinner */}
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loading && <Spinner />}
        >
          {console.log(this.state.articles.length)}
          {console.log(this.state.totalResults)}
          <div className='flex_container'> {/* When the loading becomes false then show the map function*/}
            {this.state.articles.map((elements) => {
              console.log(elements);
              return <NewsItem title={elements.title ? elements.title.slice(0, 40) : ""} description={elements.description ? elements.description.slice(0, 80) : ""} imageurl={elements.urlToImage} url={elements.url} />
            })}
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}
