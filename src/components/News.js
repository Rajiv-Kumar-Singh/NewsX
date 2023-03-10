import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "MLB.com"
            },
            "author": "Michael Clair",
            "title": "China vs. Japan in World Baseball Classic 2023 - MLB.com",
            "description": "All eyes in Japan are on the Tokyo Dome as Team Japan -- arguably the strongest team in this tournament -- begins its chase for its third World Baseball Classic championship. Japan begins against China, which went winless in the 2017 tournament but will hope …",
            "url": "https://www.mlb.com/news/china-vs-japan-in-world-baseball-classic-2023",
            "urlToImage": "https://img.mlbstatic.com/mlb-images/image/upload/t_2x1/t_w1536/mlb/bca1xsu6eszerrrv1zid.jpg",
            "publishedAt": "2023-03-09T09:56:15Z",
            "content": "All eyes in Japan are on the Tokyo Dome as Team Japan -- arguably the strongest team in this tournament -- begins its chase for its third World Baseball Classic championship. Japan begins against Chi… [+2484 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Des Bieler",
            "title": "Shawn Kemp is arrested in connection with a drive-by shooting - The Washington Post",
            "description": "The former SuperSonics standout, now a Seattle cannabis entrepreneur, was reportedly charged in connection to gunfire outside of a Tacoma shopping mall.",
            "url": "https://www.washingtonpost.com/sports/2023/03/09/shawn-kemp-arrest-shooting/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FYI3VOBWRYI6XFUZADJRD4J5FU.jpg&w=1440",
            "publishedAt": "2023-03-09T09:26:00Z",
            "content": "Comment on this story\r\nFormer NBA player Shawn Kemp was booked into jail in Washington state on Wednesday on a felony charge of drive-by shooting, according to Pierce County records.\r\nLocal reports l… [+1703 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Silvia Amaro, Arjun Kharpal",
            "title": "The U.S. imposed semiconductor export controls on China. Now a key EU nation is set to follow suit - CNBC",
            "description": "The Netherlands — home to critical chip firm ASML — is embroiled in political tensions between the U.S. and China over semiconductor technology.",
            "url": "https://www.cnbc.com/2023/03/09/asml-netherlands-to-restrict-semiconductor-machine-exports-after-us-pressure.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107012429-1644326826840-gettyimages-450100802-NETHERLANDS_ASML.jpeg?v=1678350593&w=1920&h=1080",
            "publishedAt": "2023-03-09T08:29:53Z",
            "content": "An employee stands by cables inside a ASML Twinscan XT1000 lithography machine, during manufacture at the ASML factory in Veldhoven, Netherlands.\r\n\"Given the technological developments and the geopol… [+2869 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Holly Ellyatt",
            "title": "Ukraine war live updates: 'The enemy is raging,' Ukraine says, after Russia unleashes wave of drone and missile strikes across the country - CNBC",
            "description": "Kyiv and other major cities including Lviv, Kharkiv and Odesa have been hit by a wave of Russian drone and missile strikes overnight, Ukrainian officials said.",
            "url": "https://www.cnbc.com/2023/03/09/ukraine-war-live-updates-latest-news-on-russia-and-the-war-in-ukraine.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107205656-1678353318225-gettyimages-1247931750-AFP_33AU2NX.jpeg?v=1678353382&w=1920&h=1080",
            "publishedAt": "2023-03-09T07:59:00Z",
            "content": "Kyiv and other major cities in Ukraine, including Lviv, Kharkiv and Odesa, have been hit by a wave of Russian missile strikes overnight, Ukrainian officials said, with air raid alerts activated acros… [+1685 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Page Six"
            },
            "author": "Nika Shakhnazarova",
            "title": "Raquel Leviss: 'I care for Tom' but 'I need to heal' after affair - Page Six",
            "description": "The “Vanderpump Rules” star defiantly returned to social media to issue an update on where she stands with Tom Sandoval following their months-long affair.",
            "url": "https://pagesix.com/2023/03/09/raquel-leviss-i-care-about-tom-but-i-need-to-heal-after-affair/",
            "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2023/03/newspress-collage-6734870-1678347481733.jpg?quality=75&strip=all&1678329665&w=1200",
            "publishedAt": "2023-03-09T07:45:00Z",
            "content": "Raquel Leviss defiantly returned to social media to update “Vanderpump Rules” fans on where she stands with co-star Tom Sandoval following their months-long affair.\r\n“Besides the indefensible circums… [+2776 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Georgian ruling party withdraws 'foreign agents' bill after two nights of protest - Reuters.com",
            "description": "Georgia's ruling party said on Thursday it was dropping a bill on \"foreign agents\" after two nights of violent protests against what opponents said was a Russian-inspired authoritarian shift that imperilled hopes of the country joining the European Union.",
            "url": "https://www.reuters.com/world/europe/georgian-lawmakers-withdraw-foreign-agents-bill-ruling-party-2023-03-09/",
            "urlToImage": "https://www.reuters.com/resizer/XaHLh5rxWmMOh0mXS3kZapJifC8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LWZUEYHDQBLY5MBJRXPHJGKHHE.jpg",
            "publishedAt": "2023-03-09T07:44:00Z",
            "content": "TBILISI, March 9 (Reuters) - Georgia's ruling party said on Thursday it was dropping a bill on \"foreign agents\" after two nights of violent protests against what opponents said was a Russian-inspired… [+3217 chars]"
        }
    ]
    constructor(props) {
        super(props)

        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6b19f7a8d6a140a899c9cf8afeb69c13&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6b19f7a8d6a140a899c9cf8afeb69c13&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })

        this.setState({
            page: this.state.page - 1,
            loading: false
        })

        // Scrolling to top effect 
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6b19f7a8d6a140a899c9cf8afeb69c13&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parsedData = await data.json()

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }

        // Scrolling to top effect 
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

    }

    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center'>Top Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 d-flex justify-content-center" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ''} imageUrl={element.urlToImage ? element.urlToImage : "https://assamtribune.com/h-upload/2023/03/09/1477543-issnasa.jpg"} newsUrl={element.url ? element.url : ""} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div >
        )
    }
}

export default News