import React, {Component} from 'react';
import {Combobox} from 'react-widgets';
import LChart from './LChart';

class Main extends Component {

    constructor(props) {
        super(props);
        this.chooseCrypto = this.chooseCrypto.bind(this);
        this.chooseCurrency = this.chooseCurrency.bind(this);
    }


    componentDidMount() {
        this.props.getHistoricalPrice(this.props.crypto, this.props.currency, "200");
        this.aCrypto = this.props.arrCrypto;
        this.aCurrency = this.props.arrCurrency;
    }
    
    chooseCrypto(crypto) {
        this.props.selectCrypto(crypto);
        this.props.getHistoricalPrice(crypto, this.props.currency, "200");
    }

    chooseCurrency(currency) {
        this.props.selectCurrency(currency);
        this.props.getHistoricalPrice(this.props.crypto, currency, "200");
    }

    render() {

        return (
          <div>
            <LChart {...this.props} />
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

export default Main;
