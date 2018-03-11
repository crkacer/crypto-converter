import React, { Component } from 'react';
import LineChart from 'react-linechart';
import 'react-linechart/dist/styles.css';
 
export default class LChart extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        let xAxis = "Year";
        let yAxis = this.props.y;
        let crypto = this.props.x;
        const data = [
            {									
                color: "steelblue", 
                points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}] 
            }
        ];
        return (
            <div>
                <div className="App">
                    <h1>{this.props.x}/{this.props.y}</h1>
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