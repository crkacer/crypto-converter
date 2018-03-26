import React, { Component } from 'react';
import Main from './components/Main';
import { connect } from "react-redux";
import { selectCrypto, selectCurrency, getHistoricalPrice } from "./actions";
import { bindActionCreators } from "redux";
import promise from "redux-promise";

import './App.css';
import 'react-widgets/dist/css/react-widgets.css';

class App extends Component {

  render() {
    return (
      <div>
        <Main {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      crypto: state.crypto,
      currency: state.currency,
      arrCrypto: state.arrCrypto,
      arrCurrency: state.arrCurrency,
      dataPrice: state.dataPrice
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCrypto, selectCurrency, getHistoricalPrice }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
