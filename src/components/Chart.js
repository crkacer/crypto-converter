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
                ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
                ['BTC', 30, 200, 100, 400, 150, 250],
                ['data2', 130, 340, 200, 500, 250, 350]
            ]
          };
        const options = {
            padding: {
                top: 20,
                bottom: 20,
                left: 40,
                right: 10
              },
              size: {
                width: 800,
                height: 600
              },
              subchart: true,
              zoom: true,
              grid: {
                x: false,
                y: true
              },
              labels: true,
              axisLabel: {
                x: "product",
                y: "quantity"
              },
              onClick: function(d) {
                let categories = this.categories(); //c3 function, get categorical labels
                console.log(d);
                console.log("you clicked {" + d.name + ": " + categories[d.x] + ": " + d.value + "}");
              },
              axis: {          
                x: {
                    tick: {
                        values: [0, 5, 10, 15, 20, 25, 30, 35, 40]
                    },
                    min: 0,
                    max: 30
                },
                y: {
                    min: 0,
                }
            }
        }; 
        return (
            <div>
                <h1>{this.props.crypto}</h1>
                <h1>{this.props.currency}</h1>
                <C3Chart data={data} options={options}/>
            </div>
            
        );
    }
}