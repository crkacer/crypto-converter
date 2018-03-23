import React, { Component } from 'react';
import {Combobox} from 'react-widgets';
import LChart from './components/LChart';
import { connect } from "react-redux";
import { selectCrypto, selectCurrency, getHistoricalPrice } from "./actions";
import { bindActionCreators } from "redux";

import './App.css';
import 'react-widgets/dist/css/react-widgets.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.chooseCrypto = this.chooseCrypto.bind(this);
    this.chooseCurrency = this.chooseCurrency.bind(this);
  }


  componentDidMount() {
    this.props.getHistoricalPrice(this.props.crypto, this.props.currency, "1800");
    this.aCrypto = this.props.arrCrypto;
    this.aCurrency = this.props.arrCurrency;
  }

  chooseCrypto(crypto) {
    this.props.selectCrypto(crypto);
    this.props.getHistoricalPrice(crypto, this.props.currency, "1800");
  }

  chooseCurrency(currency) {
    this.props.selectCurrency(currency);
    this.props.getHistoricalPrice(this.props.crypto, currency, "1800");
  }
  
  render() {

    return (
      <div>
        <LChart 
          crypto={this.props.crypto} 
          currency={this.props.currency}
          dataPrice = {this.props.dataPrice}
          />
        <Combobox
        data={this.aCrypto}
        defaultValue={this.props.crypto}
        textField='crypto'
        onChange={this.chooseCrypto}
        className="selectCrypto"
        />
        <Combobox
        data={this.aCurrency}
        defaultValue={this.props.currency}
        textField='currency'
        onChange={this.chooseCurrency}
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
