import React, { Component } from 'react';
import LineChart from 'react-linechart';
import 'react-linechart/dist/styles.css';
import jsonData from '../data.json';
// import jsonTest from '../test.json';
 
export default class LChart extends Component {
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
        console.log(jso[crypto][currency]);
        console.log(JSON.stringify(data) === JSON.stringify(this.state.dataPrice));

        return data[crypto][currency];
    }

    render() {
        let xAxis = "Year";
        let yAxis = this.props.y;
        let crypto = this.props.x;
        let data = this.getData(this.props.x, this.props.y);
        
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