import React, {Component} from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
 


export default class Chart extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const data = {
            columns: [
                ['x', '2013-01-21', '2013-01-25', '2013-01-26'],
                ['data1', 500, 300, 100],
                ['data3', 200, 150, null]
            ]
          }; 
        return (
            <div>
                <h1>{this.props.crypto}</h1>
                <h1>{this.props.currency}</h1>
                <C3Chart data={data} />
            </div>
            
        );
    }
}