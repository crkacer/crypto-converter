import React, { Component } from 'react';
import LineChart from 'react-linechart';
import Chart from './Chart';
import 'react-linechart/dist/styles.css';
import { TypeChooser } from "react-stockcharts/lib/helper";

class LChart extends Component {
    render() {
        let xAxis = "Year";
        let yAxis = this.props.currency;
        return (
            <div>
                <div className="App">
                    <h1>{this.props.crypto}/{this.props.currency}</h1>
                    <Chart {...this.props}/>
                </div>				
            </div>
        );
    }
}

export default LChart;
  