import React, { Component } from 'react'

export default class NewsItem extends Component {
    render(props) {
        let { title, author, goDiscription, url, urlToImage, publishedAt } = this.props
        console.log(this.props)

        return (
            <>
               


                        <div className="col-md-4" >
                            <div className="card h-100" style={{ width: "18rem" }}>
                                <img src={urlToImage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <div className="row">
                                        <i className="card-subtitle mt-2 text-muted">Author :- '{author}'</i>
                                        <i className="card-subtitle mt-2 text-muted">Date :- '{publishedAt}'</i>
                                    </div>
                                        <p className="card-text ">{goDiscription.slice(0,59)}</p>
                                    <a href={url} className="btn btn-primary ">Read</a>
                                </div>
                            </div>
                        </div>

                        
                
            </>
        )
    }
}
