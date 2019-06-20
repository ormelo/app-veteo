import React, { Component } from 'react';
import { render } from 'react-dom';
import CaptureMeasurements from './captureMeasurements.jsx';
import Quiz from './quiz.jsx';
import Merchant from './merchant.jsx';
import Shop from './shop.jsx';
// Import routing components
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

let searchResults = [
                      {
                        "id": 1,
                        "thumbnail": "th01.jpg",
                        "title": "Sri Annapoorneshwari Catering",
                        "address": "365, Ideal Homes Layout, RR Nagar",
                        "specialities": [
                          {
                            "icon": "ic_food.jpg",
                            "title": "Karnataka, Andhra, Tamil, North Indian"
                          },
                          {
                            "icon": "ic_group.jpg",
                            "title": "Ideal for parties of all sizes"
                          }
                        ],
                        "verifiedStories": [
                          {
                            "avatar": "",
                            "title": "Good food served \uD83D\uDC4D",
                            "sentiment": "positive",
                            "story": [
                              {
                                "from": "bot",
                                "message": ""
                              },
                              {
                                "from": "user",
                                "message": ""
                              }
                            ]
                          },
                          {
                            "avatar": "",
                            "title": "Timely service",
                            "sentiment": "neutral"
                          }
                        ],
                        "cta": "Get instant quote"
                      },
                      {
                          "id": 2,
                          "thumbnail": "th01.jpg",
                          "title": "Bangalore Catering",
                          "address": "Ashoka pillar, 2nd Block Jayanagar",
                          "specialities": [
                            {
                              "icon": "ic_food.jpg",
                              "title": "North Indian, South Indian"
                            },
                            {
                              "icon": "ic_group.jpg",
                              "title": "Ideal for parties of all sizes"
                            }
                          ],
                          "verifiedStories": [
                            {
                              "avatar": "",
                              "title": "Timely service",
                              "sentiment": "positive",
                              "story": [
                                {
                                  "from": "bot",
                                  "message": ""
                                },
                                {
                                  "from": "user",
                                  "message": ""
                                }
                              ]
                            },
                            {
                              "avatar": "",
                              "title": "Good food served \uD83D\uDC4D",
                              "sentiment": "neutral"
                            }
                          ],
                          "cta": "Get instant quote"
                        }
                    ];

class ResultHeadline extends Component {
    render() {
        return (
            <div className="result-c">
                <img src="./img/heart.png" />
                <div className="result-headline">{this.props.title}</div>
            </div>
        );
    }
}

class Card extends Component {
    renderSpecialities(specialities) {
        let results = [];
        specialities.map((item,key)=> {
                            results.push(<div className="icon-c"><img src={`./img/${item.icon}`}/><div className="icon-title">{item.title}</div></div>);
                        });
        return results;
    }
    renderVerifiedStories(stories) {
            let results = [];
            stories.map((item,key)=> {
                                results.push(<li className="me">{item.title}</li>);
                            });
            return results;
        }
    render() {
        return (
            <div className="card">
               <div className="card-c">
                    <div className="detail">
                        <div className="thumbnail-section">
                            <img src={`./img/${this.props.thumbnail}`} />
                        </div>
                        <div className="detail-section">
                            <div className="title">{this.props.title}</div>
                            <div className="address">{this.props.address}</div>
                            <div className="spec-c">{this.renderSpecialities(this.props.specialities)}</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="detail story">
                        <div className="story-title">Verified customer stories (tap to view)</div>
                        <ul className="stories">
                            {this.renderVerifiedStories(this.props.verifiedStories)}

                        </ul>
                    </div>
               </div>
               <div className="card-d"></div>
               <div className="ctabtn">
                                  Get Instant Quote
                              </div>
            </div>
        );
    }
}

class SearchResult extends Component {

    renderCards() {
        let results = [];
        searchResults.map((item,key)=> {
            results.push(<Card title={item.title} address={item.address} specialities={item.specialities} verifiedStories={item.verifiedStories} thumbnail={item.thumbnail}/>);
        });
        return results;
    }

    render() {
        return (
            <div>
                <ResultHeadline title="Services customers used & loved" />
                {this.renderCards()}
            </div>
        );
    }
}

class CreateFitProfile extends Component {
    propTypes: {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired
    }
    componentDidMount(){
        document.querySelector('.loading').style.display = 'none';
    }
    render(){
        const { match, location, history } = this.props;
        return (<div>
                <SearchResult />
              </div>
          );
    }
}

var CreateFitProfileWithRouter = withRouter(CreateFitProfile)
var ShopWithRouter = withRouter(Shop)
var QuizWithRouter = withRouter(Quiz)

render(<Router>
        <div>
        <Route path="/search" render={()=>(
            <div className="results">
            <Route exact path="/search" component={CreateFitProfile}/>
            <Route exact path="/search/update" component={CaptureMeasurements}/>
            <Route exact path="/search/quiz" component={QuizWithRouter}/>
          </div>)} />
        <Route path="/shop" render={()=>(
            <div>
            <div className="merchant-frame">
              <div className="logo">
                <img src="../img/logoimg.png" style={{width:'16px',left:'20px',position:'absolute',top:'-4px'}}/>
                <span className="logoFont">a</span>
              </div>
              <span className="merchant-size-container">Please select size <span id="merchantSize">XL</span> below</span>
            </div>
            <Route exact path="/shop" component={ShopWithRouter}/>
            <Route path="/shop/buy" component={Merchant}/>
          </div>
          )}/>
        </div>
    </Router>, document.getElementById('containerWiz'));