import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
 
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false

    }
  }
  //firstly constructor will run then render and at the last componentDidMount
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a165f78855854571bfd8e546e87441bc";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles});

  }
  render() {
    return (
      <div className="container my-3 ">
        <h1>NewsMonkey-Top Headlines</h1>
       
        <div className="row">

        {this.state.articles.map((element)=>{
          return  <div className="col-md-4"  key={element.url} >
          <NewsItem
           
            title={element.title?element.title.slice(0,50):""}
            description={element.description?element.description.slice(0,90):""}
            imageUrl={element.urlToImage?element.urlToImage:" https://womansera.com/wp-content/uploads/2021/12/wp-1640595388943.png  "}
            newsUrl={element.url}
          />
        </div>



        })}
         
         
        </div>
      </div>
    );
  }
}

export default News;
