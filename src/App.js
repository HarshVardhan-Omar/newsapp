import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 6;
  apiKey = "6526ffff8cef4a5a8bb80a9a0f318df7"

  state={
    progress:0,
    color:"primary"
  }

  setProgress =(progress) => {
    this.setState({progress:progress})
  }
  setColor =(color) => {
    this.setState({color:color})
  }
  
  render() {
    return (
      <>
      <Navbar key="general"  setcolor={this.setColor} backgroundColor={this.state.color} />
     <LoadingBar
        height={4}
        color='#f11946'
        progress={this.state.progress}
      />
   
    <div className="container">
    { <Routes>
       {<Route exact  path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" backgroundColor={this.color} />}/> }
       {<Route exact  path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business" backgroundColor="secondary" />}/> }
       {<Route exact  path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" backgroundColor="success" />}/> }
       {<Route exact  path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" backgroundColor="dark" />}/> }
       {<Route exact  path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health" backgroundColor="primary" />}/> }
       {<Route exact  path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science" backgroundColor="danger" />}/> }
       {<Route exact  path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports" backgroundColor="info" />}/> }
       {<Route exact  path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology" backgroundColor="warning" />}/> }
     </Routes> }
     </div>   
      </>
    )
  }
}
