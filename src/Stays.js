import React, { Component } from 'react';
import './Stays.css';

export default class Stays extends Component {
    state = {
        superHost: "none"
    }
    componentDidMount(){
        if(this.props.stay.superHost){this.setState({
            superHost: "inline-block"
        })}
    }
    render() {
        return (
            <div className="stay">
                <img src={this.props.stay.photo}></img>
                <div>
                    <p className="superHost" style={{display: this.state.superHost}}>superHost</p>   
                    <p className="type">{this.props.stay.type}</p>
                    <p className="rating"><span className="material-icons star">star_rate</span>{this.props.stay.rating}</p>
                    <p>{this.props.stay.title}</p>
                </div>
                
            </div>
        )
    }
}
