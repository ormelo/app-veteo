import React, { Component } from 'react';
import { render } from 'react-dom';
import CaptureMeasurements from './captureMeasurements.jsx';
import Quiz from './quiz.jsx';
import Merchant from './merchant.jsx';
import Shop from './shop.jsx';
// Import routing components
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

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
    render() {
        return (
            <div>Card</div>
        );
    }
}

class SearchResult extends Component {
    render() {
        return (
            <div>
                <ResultHeadline title="Services customers used & loved" />
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