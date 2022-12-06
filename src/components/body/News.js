import React, { Component } from 'react'
import NewsItem from "./NewsItem"


export default class News extends Component {
  
  
  static defaultProps = {  
    country:'in'
  }
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      }
   }

  async componentDidMount() { //The keyword async before a function makes the function return a promise
    let url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=business&apiKey=152d1cd2f0384fb5b1923675a07d0760&page=1 `// Api url where we get the data 
    let data = await fetch(url) // fetch() function request data from Url and return it. 
    //  The await keyword can only be used inside an async function.
    // The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
    let jsonData = await data.json() //  return data in json formate  
    //    alert(jsonData.totalResults)
    this.setState({
      articles: jsonData.articles,
      totalResults: jsonData.totalResults
  
    })
  }


  handleNextClick = async () => {
 
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=152d1cd2f0384fb5b1923675a07d0760&page=${this.state.page + 1}`
    let data = await fetch(url)
    let jsonData = await data.json()
    this.setState({
      page: this.state.page + 1,
      articles: jsonData.articles   
    })
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=152d1cd2f0384fb5b1923675a07d0760&page=${this.state.page - 1}`
    let data = await fetch(url)
    let jsonData = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: jsonData.articles
    })

    // test country data
  }



  render() {

    return (
      <>

        <div className="container my-3">
          <h2 className=''>Today's Highlights </h2>
          {/* <button onClick={this.country}>India</button> */}
          <div className="row my-3">

            {
              this.state.articles.map((ele) => {
                return (
                <NewsItem
                  author={ele.author}
                  content={ele.content}
                  description={ele.description}
                  publishedAt={ele.publishedAt}
                  title={ele.title}
                  key={ele.url} // url is unique for every article/news item so thats why it should be key .
                  url={ele.url}
                  urlToImage={ele.urlToImage}
                />
                )
              })
            }

          </div>
          <div className="contaienr d-flex justify-content-between">
            <button className='btn btn-primary ' disabled={this.state.page < 1} onClick={this.handlePrevClick}  > &larr; previous</button>
            <button className='btn btn-primary'  onClick={this.handleNextClick} >Next &rarr;</button>
          </div>
        </div>


      </>
    )


  }
}
