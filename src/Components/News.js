import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 6,
        category: "general",
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };
//we don't need these 2 line handlenextclick and prev click anymore becuse we are using infinite scroll
    handleNextClick = async () => {
        //20 is no of articles a page can have ==>totalarticles/20 gives total pages if nxt page is grter than total page
        //then we do nothing
        if (
            Math.ceil(this.state.totalResults / this.props.pageSize) <
            this.state.page + 1
        ) {
        } else {
            this.updateNews();
            this.setState({
                page: this.state.page + 1,
            });
        }
    };

    handlePrevClick = async () => {
        this.updateNews();
        this.setState({
            page: this.state.page - 1,
        });
    };
    constructor() {
        super();
        this.state = {
            article: [],
            loading: true,
            page: 1,
            totalResults:0
        };
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    async updateNews() {
        const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=53e2078057574550ac1b4ea8dcfdd8a0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true,
        });
        let data = await fetch(URL);
        let parseData = await data.json();
        this.setState({
            article: parseData.articles,
            loading: false,
            totalResults: parseData.totalResults,
        });
    }


    async componentDidMount() {
        this.updateNews();
    }
    
    fetchMoreData =async () => {
        
        const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=53e2078057574550ac1b4ea8dcfdd8a0&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({
            page: this.state.page + 1
        });
        let data = await fetch(URL);
        let parseData = await data.json();
        this.setState({
            article: this.state.article.concat(parseData.articles),
            totalResults: parseData.totalResults,
            
        });
      };

    render() {
        return (
            <>
                <h2  style={{ textAlign: "center",marginTop:"70px",marginBottom:"30px"}}>
                    DailyNews-Top Heading {this.capitalizeFirstLetter(this.props.category)}
                </h2>
            {this.state.loading && <Spinner />}
                {!this.state.loading && <InfiniteScroll
                    dataLength={this.state.article.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.article.length !== this.state.article.totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container">
                    <div className="row">
                        {
                            this.state.article.map((ele) => {
                                return (
                                    <div key={ele.url} className="col-md-4">
                                        <Newsitem
                                            title={ele.title ? ele.title : ""}
                                            description={
                                                ele.description ? ele.description.slice(0, 86) : ""
                                            }
                                            imgSrc={ele.urlToImage}
                                            newsUrl={ele.url}
                                            author={ele.author}
                                            date={ele.publishedAt}
                                            source={ele.source.name}
                                        />
                                    </div>
                                );
                            })}
                    </div>
                    </div>
                </InfiniteScroll>}
                {/* <div className="container d-flex justify-content-between">
                    <button
                        type="button"
                        disabled={this.state.page <= 1}
                        className="btn btn-dark"
                        onClick={this.handlePrevClick}
                    >
                        &larr;Previous
                    </button>
                    <button
                        type="button"
                        disabled={
                            Math.ceil(this.state.totalResults / this.props.pageSize) <
                            this.state.page + 1
                        }
                        className="btn btn-dark"
                        onClick={this.handleNextClick}
                    >
                        Next&rarr;
                    </button>
                </div> */}
            </>
        );
    }
}
