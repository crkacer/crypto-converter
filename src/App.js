import React, { Component } from 'react';
import {Combobox} from 'react-widgets';
import Chart from './components/Chart';
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
        <Combobox
      data={arrCrypto}
      defaultValue={"BTC"}
      textField='crypto'
      onChange={chooseCrypto}
    />
        <Combobox
        data={arrCurrency}
        defaultValue={"USD"}
        textField='currency'
        onChange={chooseCurrency}
      />
      <Chart crypto={this.state.crypto} currency={this.state.currency}/>
      </div>
    );
  }
}

export default App;
