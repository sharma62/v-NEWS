import React, { Component } from 'react'
import NewsItem from "./NewsItem"

export default class News extends Component {
  render() {
    return (
      <>

        <NewsItem
          author="Nicki Cox"
          title="Brad Pitt spotted at Bono concert with Paul Wesley’s ex wife, Ines de Ramon"
          goDiscription="Pitt, 58, and de Ramon, 29 — who separated from Wesley in September — seemed smitten while chatting with some of the actor's famous friends"
          url="https://pagesix.com/2022/11/15/brad-pitt-spotted-with-paul-wesleys-ex-wife-ines-de-ramon/"
          urlToImage="https://pagesix.com/wp-content/uploads/sites/3/2022/11/paul-wesley-ex-wife-ines-de-ramon-spotted-bono-concert-with-brad-pitt.jpg?quality=75&strip=all&w=1200"
          publishedAt="2022-11-16T02:33:43Z"
          content="Brad Pitt was spotted hanging out with Ines de Ramon on Sunday night at a Bono concert in Los Angeles.\r\nThe pair reportedly arrived together at around 8 p.m. before meeting up with some of Pitt’s fam… [+2219 chars]"
        />


      </>
    )
  }
}
