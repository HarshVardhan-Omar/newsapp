import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "5",
    category: "sports",
    backgroundColor: "primary"
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    backgroundColor: PropTypes.string
  };
   capitalizeFirstLetter=(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`  
  }
  //firstly constructor will run then render and at the last componentDidMount

  async UpdateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a165f78855854571bfd8e546e87441bc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
     this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
     this.setState({
       articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    await this.UpdateNews();
  }
  handlePrevious = async () => {
     this.setState({ page: this.state.page - 1 });
    await this.UpdateNews();
  };
  handleNext = async () => {
    // }
     this.setState({ page: this.state.page + 1 });
    await this.UpdateNews();
  };
  render() {
    
    return (
      <div className="container my-3 ">
        <h1 className="text-center">NewsMonkey-Top  {this.capitalizeFirstLetter(this.props.category)}  Headlines    </h1>
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 50) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 90)
                        : ""
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : " https://womansera.com/wp-content/uploads/2021/12/wp-1640595388943.png  "
                    }
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    backgroundColor ={this.props.backgroundColor}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between ">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className={`btn btn-${this.props.backgroundColor}`}
            onClick={this.handlePrevious}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className={`btn btn-${this.props.backgroundColor}`}
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
