import React, { Component } from 'react';
import {Combobox} from 'react-widgets';
import LChart from './components/LChart';
import { connect } from "react-redux";
import { selectCrypto, selectCurrency, getHistoricalPrice } from "./actions";
import { bindActionCreators } from "redux";

import './App.css';
import 'react-widgets/dist/css/react-widgets.css';

class App extends Component {

  componentDidMount() {
    this.props.selectCrypto("BTC");
    this.props.selectCurrency("USD");
  }
  
  render() {

    return (
      <div>
        <LChart crypto={this.props.crypto} currency={this.props.currency}/>
        <Combobox
        data={this.props.arrCrypto}
        defaultValue={"BTC"}
        textField='crypto'
        onChange={this.props.selectCrypto}
        className="selectCrypto"
        />
        <Combobox
        data={this.props.arrCurrency}
        defaultValue={"USD"}
        textField='currency'
        onChange={this.props.selectCurrency}
        className="selectCurrency"
        />
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
