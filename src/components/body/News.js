import React, { Component } from 'react'
import NewsItem from "./NewsItem"

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: this.article,
      loading: false,

      articles: [
        {
          "source": {
            "id": "rt",
            "name": "RT"
          },
          "author": "RT",
          "title": "Musk asks Twitter users to decide on Trump’s future",
          "description": "Elon Musk has posted a poll on Twitter asking users whether he should unban former US President Donald Trump Read Full Article at RT.com",
          "url": "https://www.rt.com/news/566813-musk-twitter-poll-unban-trump/",
          "urlToImage": "https://mf.b37mrtl.ru/files/2022.11/article/63788c6885f540460728a053.jpg",
          "publishedAt": "2022-11-19T09:02:15Z",
          "content": "Elon Musk posted a poll on Twitter on Friday asking users whether they want to see former US President Donald Trump reinstated on the site. His account was permanently suspended in early 2021 followi… [+1804 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Typepad.com"
          },
          "author": "Michel de Guilhermier",
          "title": "Big Tech Status, 18.11.2022 !",
          "description": "Situation en Bourse des GAFAM et de Tesla à la clôture hier soir à Wall Street. Apple, roi incontestable du Free Cash Flow, continue de très largement surperformer ses pairs, et fait même également mieux que le S&P 500. L'arrivée...",
          "url": "https://micheldeguilhermier.typepad.com/mdegblog/2022/11/big-tech-status-18112022-.html",
          "urlToImage": "https://micheldeguilhermier.typepad.com/.a/6a00d8341c5bbe53ef02af1484da0a200c-600wi",
          "publishedAt": "2022-11-19T08:49:02Z",
          "content": "Situation en Bourse des GAFAM et de Tesla à la clôture hier soir à Wall Street.\r\nApple, roi incontestable du Free Cash Flow, continue de très largement surperformer ses pairs, et fait même également … [+1086 chars]"
        },
        {
          "author": "Alex Veiga",
          "title": "Musk restores Trump TWITTER account after online poll...",
          "description": "Musk restores Trump TWITTER account after online poll...\r\n\n \n \n \n (Second column, 1st story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Alex Jones Stays Banned...\r\nMass Resignations Test Management Playbook...\r\nCBSNEWS Suspends Posting...\r\n\n \r\n\n \n \n Drudge Report Fee…",
          "url": "https://apnews.com/article/elon-musk-biden-twitter-inc-technology-congress-d88e3de4b3cc095926dc133f53dc3320",
          "urlToImage": "https://storage.googleapis.com/afs-prod/media/7cd520704d2c47a1be3db18698a0fef7/3000.jpeg",
          "publishedAt": "2022-11-20T01:55:38Z",
          "content": "LOS ANGELES (AP) Elon Musk said Saturday he will reinstate Donald Trumps account on Twitter, reversing a ban that has kept the former president off the social media site since a pro-Trump mob attacke… [+4661 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "KENS5.com"
          },
          "author": "Associated Press",
          "title": "Musk restores Trump's Twitter account after holding online poll",
          "description": "Musk says Trump's Twitter account will be reinstated, nearly 2 years after it was dropped in aftermath of Jan. 6.",
          "url": "https://www.kens5.com/article/news/nation-world/trumps-twitter-account-will-be-reinstated-musk-says/507-82f79d94-0ee9-44e7-9b4e-3f8e835484c5",
          "urlToImage": "https://media.kens5.com/assets/CCT/images/cd48ad6c-2386-472c-8695-1996ca6ad628/cd48ad6c-2386-472c-8695-1996ca6ad628_1140x641.jpg",
          "publishedAt": "2022-11-20T01:53:22Z",
          "content": "LOS ANGELES Elon Musk reinstated Donald Trumps account on Twitter on Saturday, reversing a ban that has kept the former president off the social media site since a pro-Trump mob attacked the U.S. Cap… [+4993 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "L'Express"
          },
          "author": "AFP",
          "title": "Elon Musk rétablit le compte de Donald Trump sur Twitter",
          "description": "New York - Elon Musk, le nouveau patron de Twitter, a rétabli samedi le compte de l'ancien président américain Donald Trump, banni du réseau social après l'assaut du Capitole à Washington en janvier 2021.",
          "url": "https://www.lexpress.fr/actualites/1/actualite/elon-musk-retablit-le-compte-de-donald-trump-sur-twitter_2183828.html",
          "urlToImage": "https://static.lexpress.fr/medias_12438/w_1731,h_1298,c_crop,x_0,y_34/w_605,h_350,c_fill,g_north/v1668101039/un-telephone-avec-une-photo-d-elon-musk-avec-en-fond-le-logo-twitter-le-4-octobre-2022-a-washington_6368274.jpg",
          "publishedAt": "2022-11-20T01:52:59Z",
          "content": "\"Le peuple s'est exprimé. Trump va être rétabli\", a tweeté le fantasque entrepreneur sur son propre compte après le résultat d'un sondage lancé auprès de ses abonnés.  \r\nPlus de quinze millions ont r… [+2860 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Daily Mail"
          },
          "author": "Olivia Devereux-evans",
          "title": "Tories still want to cut taxes before the next election",
          "description": "It comes after the Autumn Statement caused anger among Conservative members.  MPs are furious that Jeremy Hunt has raised Britain's tax burden to the highest level since World War Two.",
          "url": "https://www.dailymail.co.uk/news/article-11448511/Tories-want-cut-taxes-election.html",
          "urlToImage": "https://i.dailymail.co.uk/1s/2022/11/20/01/64734127-0-image-a-2_1668906772009.jpg",
          "publishedAt": "2022-11-20T01:50:30Z",
          "content": "The Tory party are still aiming to slash taxes ahead of the next election but don't have 'a hope in hell' of doing so before inflation comes down, Nadhim Zahawi has said.\r\nMr Zahawi, the Conservative… [+34112 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MarketWatch"
          },
          "author": "Associated Press",
          "title": "Associated Press: Musk restores Trump’s Twitter account after online poll",
          "description": "Elon Musk reinstated Donald Trump's account on Twitter on Saturday, reversing a ban that has kept the former president off the social media site since a pro-Trump mob attacked the U.S. Capitol on Jan. 6, 2021, as Congress was poised to certify Joe Biden's ele…",
          "url": "https://www.marketwatch.com/story/musk-restores-trumps-twitter-account-after-online-poll-01668908893",
          "urlToImage": "https://images.mktw.net/im-670431/social",
          "publishedAt": "2022-11-20T01:48:00Z",
          "content": "Elon Musk reinstated Donald Trumps account on Twitter on Saturday, reversing a ban that has kept the former president off the social media site since a pro-Trump mob attacked the U.S. Capitol on Jan.… [+4971 chars]"
        }




















      ]

    }
  }

  render() {

    return (
      <>

        {/* <NewsItem
          author="Nicki Cox"
          title="Brad Pitt spotted at Bono concert with Paul Wesley’s ex wife, Ines de Ramon"
          goDiscription="Pitt, 58, and de Ramon, 29 — who separated from Wesley in September — seemed smitten while chatting with some of the actor's famous friends"
          url="https://pagesix.com/2022/11/15/brad-pitt-spotted-with-paul-wesleys-ex-wife-ines-de-ramon/"
          urlToImage="https://pagesix.com/wp-content/uploads/sites/3/2022/11/paul-wesley-ex-wife-ines-de-ramon-spotted-bono-concert-with-brad-pitt.jpg?quality=75&strip=all&w=1200"
          publishedAt="2022-11-16T02:33:43Z"
          content="Brad Pitt was spotted hanging out with Ines de Ramon on Sunday night at a Bono concert in Los Angeles.\r\nThe pair reportedly arrived together at around 8 p.m. before meeting up with some of Pitt’s fam… [+2219 chars]"
        /> */}
        <div className="container">
          <div className="row">
            {
              this.state.articles.map((ele) => {
                // console.log(ele.author,ele.title)
                return (<NewsItem
                  author={ele.author}
                  title={ele.title}
                  goDiscription={ele.description}
                  url={ele.url}
                  urlToImage={ele.urlToImage}
                  publishedAt={ele.publishedAt}
                />)
              })
            }
          </div>
        </div>
      </>
    )
  }
}
