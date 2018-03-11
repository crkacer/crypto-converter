import React, { Component } from 'react';
import {Combobox} from 'react-widgets';
import Chart from './components/Chart';
import LChart from './components/LChart';

import './App.css';
import 'react-widgets/dist/css/react-widgets.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crypto: "BTC",
      currency: "USD"
    }
  }
  render() {
    let arrCrypto = ['BTC', 'ETH', 'XRB', 'BCH'];
    let arrCurrency = ['USD', 'EUR'];
    const chooseCrypto = (crypto) => {
      this.setState({crypto})
    }
    const chooseCurrency = (currency) => {
      this.setState({currency})
    }
    return (
      <div>
        <LChart x={this.state.crypto} y={this.state.currency}/>
        <Combobox
        data={arrCrypto}
        defaultValue={"BTC"}
        textField='crypto'
        onChange={chooseCrypto}
        className="selectCrypto"
        />
        <Combobox
        data={arrCurrency}
        defaultValue={"USD"}
        textField='currency'
        onChange={chooseCurrency}
        className="selectCurrency"
        />
      </div>
    );
  }
}

export default App;
