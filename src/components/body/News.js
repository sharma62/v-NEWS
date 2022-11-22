import React, { Component } from 'react'
import NewsItem from "./NewsItem"

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    }
  }
  async componentDidMount() { //The keyword async before a function makes the function return a promise
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=152d1cd2f0384fb5b1923675a07d0760" // Api url where we get the data 
    let data = await fetch(url) // fetch() function request data from Url and return it. 
    //  The await keyword can only be used inside an async function.
    // The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
    let jsonData = await data.json() //  return data in json formate  
    console.log(jsonData)
    this.setState({ articles: jsonData.articles })

  }

  
  handleNextClick = () => { console.log("Next"); }
  handlePrevClick = () => { console.log("previous"); }
  

  render() {

    return (
      <>


        <div className="container my-3">
          <h2 className=''>Today's Highlights </h2>
          <div className="row my-3">
            {
              this.state.articles.map((ele) => {
                console.log(ele)
                return (<NewsItem
                  author={ele.author}
                  content={ele.content}
                  description={ele.description}
                  publishedAt={ele.publishedAt}
                  title={ele.title}
                  key={ele.url} // url is unique for every article/news item so thats why it should be key .
                  url={ele.url}
                  urlToImage={ele.urlToImage}
                />)
              })
            }
          </div>
          <div className="contaienr d-flex justify-content-between">
            <button className='btn btn-primary' onClick={this.handlePrevClick}  > &larr; previous</button>
            <button className='btn btn-primary' onClick={this.handleNextClick}  >Next &rarr;</button>
          </div>
        </div>
      </>
    )
  }
}
