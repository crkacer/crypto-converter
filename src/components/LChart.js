import React, { Component } from 'react';
import LineChart from 'react-linechart';
import 'react-linechart/dist/styles.css';

class LChart extends Component {

    render() {
        let xAxis = "Year";
        let yAxis = this.props.currency;
        console.log(this.props);
        
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

export default LChart;
  