import React, { Component } from 'react'

export default class NewsItem extends Component {
    render(props) {
        let { title, author, goDiscription, url, urlToImage, publishedAt, content } = this.props
        console.log(this.props)

        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={urlToImage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <div className="row">
                                        <i class="card-subtitle mt-2 text-muted">Author :- '{author}'</i>
                                        <i class="card-subtitle mt-2 text-muted">Date :- '{publishedAt}'</i>
                                    </div>
                                        <p className="card-text">{goDiscription}</p>
                                    <a href={url} className="btn btn-primary">Read</a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </>
        )
    }
}
