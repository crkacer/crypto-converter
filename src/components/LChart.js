import React, { Component } from 'react';
import LineChart from 'react-linechart';
import 'react-linechart/dist/styles.css';
import jsonData from '../data.json';
import { connect } from "react-redux";
import { selectCrypto, selectCurrency, getHistoricalPrice } from "../actions";
import { bindActionCreators } from "redux";

 
class LChart extends Component {

    render() {
        let xAxis = "Year";
        let yAxis = this.props.currency;
        let crypto = this.props.crypto;
        console.log(this.props.dataPrice);
        this.props.getHistoricalPrice(this.props.crypto, this.props.currency, "1800");
        
        return (
            <div>
                <div className="App">
                    <h1>{this.props.crypto}/{this.props.currency}</h1>
                    <LineChart 
                        width={600}
                        height={400}
                        data={Array.from(this.props.dataPrice)}
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
        crypto: state.crypto,
        currency: state.currency,
        dataPrice: state.dataPrice
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectCrypto, selectCurrency, getHistoricalPrice }, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(LChart);
  