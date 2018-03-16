import React, { Component } from 'react';
import LineChart from 'react-linechart';
import 'react-linechart/dist/styles.css';
import jsonData from '../data.json';
import { connect } from "react-redux";
import { selectCrypto, selectCurrency } from "../actions/index";
import { bindActionCreators } from "redux";

 
class LChart extends Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
        this.state = {};
    }

    componentDidMount() {
        let dataPrice = jsonData;
        // console.log(data1.data);
        // let dataTest = JSON.parse(jsonTest);
        this.setState({ dataPrice: dataPrice }, function() {
            // console.log(this.state.dataPrice);
        });
      }

    getData = (crypto, currency) => {
        
        let data = jsonData;
        let jso = {...this.state.dataPrice};
        console.log(data[crypto][currency]);
        console.log(this.props);
        // console.log(jso[crypto][currency]);
        // console.log(JSON.stringify(data) === JSON.stringify(this.state.dataPrice));
        let selectedCrypto = this.props.selectCrypto(crypto).payload;
        let selectedCurrency = this.props.selectCurrency(currency).payload;

        return data[selectedCrypto][selectedCurrency];
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
    return bindActionCreators({ selectCrypto, selectCurrency }, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(LChart);
  