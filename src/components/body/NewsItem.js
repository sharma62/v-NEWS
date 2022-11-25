import React, { Component } from 'react'
import { Zoom,Fade } from 'react-reveal'

export default class NewsItem extends Component {
    render(props) {
        let { title, author, description, url, urlToImage, publishedAt } = this.props
        console.log(this.props)

        return (
            <>


                <Zoom >

                    <div className="col-md-4 my-3" >
                        <div className="card h-100" style={{ width: "18rem" }}>
                            <img src={urlToImage ? urlToImage : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{title ? title : "No Title"}</h5>
                                <div className="row">
                                    <i className="card-subtitle mt-2 text-muted">Author :- '{author ? author : "NA"}'</i>
                                    <i className="card-subtitle mt-2 text-muted">Date :- '{publishedAt ? publishedAt : "NA"}'</i>
                                </div>
                                <p className="card-text ">{description ? description : "Discription Not Found "}</p>
                                <a href={url} className="btn btn-primary align-items-end ">Read</a>
                            </div>
                        </div>
                    </div>
                </Zoom>

            </>
        )
    }
}
