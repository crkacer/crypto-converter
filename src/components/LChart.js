import React, { Component } from 'react';
import LineChart from 'react-linechart';
import 'react-linechart/dist/styles.css';
import jsonData from '../data.json';
import { connect } from "react-redux";
import { selectCrypto, selectCurrency, getHistoricalPrice } from "../actions/index";
import { bindActionCreators } from "redux";

 
class LChart extends Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
        this.state = {};
        this.props.getHistoricalPrice("BTC", "USD", "1800");
    }

    componentDidMount() {
        
  
      }

    getData = (crypto, currency) => {
        
        // let data = this.props.getHistoricalPrice(crypto, currency, "1800").payload;
        let data = jsonData;
        // console.log(data);
        this.props.getHistoricalPrice(crypto, currency, "1800");
        let data1 = this.props.dataPrice;
        console.log(data1);
        // return this.props.dataPrice;
        return data[crypto][currency];
    }

    render() {
        let xAxis = "Year";
        let yAxis = this.props.currency;
        let crypto = this.props.crypto;
        let data = this.getData(this.props.crypto, this.props.currency);
        
        return (
            <div>
                <div className="App">
                    <h1>{this.props.crypto}/{this.props.currency}</h1>
                    <LineChart 
                        width={600}
                        height={400}
                        data={data}
                        xLabel={xAxis}
                        yLabel={yAxis}
                    />
                </div>				
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        dataPrice: state.dataPrice
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectCrypto, selectCurrency, getHistoricalPrice }, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(LChart);
  