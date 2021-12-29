import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";


export class News extends Component {
  static defaultProps = {
    country: "in" ,
    pageSize: "5",
    category: "sports"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  //firstly constructor will run then render and at the last componentDidMount
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a165f78855854571bfd8e546e87441bc&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles ,
      totalResults:parsedData.totalResults,
    loading:false});
  }
   handlePrevious = async() => {
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a165f78855854571bfd8e546e87441bc&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
  
    let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })


  }
  handleNext =  async() => {
    if(!(this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize))){

      let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a165f78855854571bfd8e546e87441bc&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })



    }
   

  }
  render() {
    return (
      <div className="container my-3 ">
        <h1 className="text-center">NewsMonkey-Top Headlines</h1>
       { this.state.loading && <Spinner/>}

<div className="row">
       {!this.state.loading &&  
          this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 50) : ""}
                  description={
                    element.description ? element.description.slice(0, 90) : ""
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : " https://womansera.com/wp-content/uploads/2021/12/wp-1640595388943.png  "
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          
        </div>
        <div className="container d-flex justify-content-between ">
          <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}> &larr;  Previous</button>
          <button disabled={this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
          </div>
      </div>
    );
  }
}

export default News;
