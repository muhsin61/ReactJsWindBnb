import React, { Component } from 'react'
import './Search.css'
import logo from './logo.png';
export default class Search extends Component {
    state = {
        boyut:true,
        addNew:"add ",
        adult:0 ,
        child:0,
        location: "Turku",
        searchIcon: false
    }
    handleChange = (event) => {
        this.setState({location: event.target.value})
    }
    getWidth = (deneme) => {
        console.log("naber" + deneme)
        this.setState({
            addNew : this.state.addNew + "addNew ",
        })
    }
    getBack = () =>{
        this.props.select(this.state.adult + this.state.child , this.state.location)
        this.setState({
            addNew : "add ",
        })
    }
    adult = (number) =>{
        if(number === "+"){
            this.setState({
                adult : this.state.adult + 1
            })
        }
        if(number === "-" && this.state.adult > 0 ){
            this.setState({
                adult: this.state.adult - 1
            })
        }
    }
    child = (number) =>{
        if(number === "+"){
            this.setState({
                child : this.state.child + 1
            })
        }
        if(number === "-" && this.state.child > 0 ){
            this.setState({
                child: this.state.child - 1
            })
        }
    }
    render() {
        return (
            <div>
            <div className="container">
                <div className={this.state.addNew}>
                    <div className="location">
                        <label>Location</label>
                        <input type="text" value={this.state.location} onChange={this.handleChange} placeholder="Location"></input>
                        <label>Guests</label>
                        <input type="number" value={this.state.adult + this.state.child} placeholder="Add Guest"></input> 
                        <div className="submit">
                            <button type="submit" onClick={this.getBack}>
                                <span class="material-icons">search</span>
                                search
                            </button>
                        </div>
                        
                    </div>
                    <div className="selectFeature">
                        <div className="selectCity">
                            <p onClick={()=>{this.setState({location:"Helsinki"})}}><span className="material-icons">location_on</span>Helsinki, Finland</p>
                            <p onClick={()=>{this.setState({location:"Turku"})}}><span className="material-icons">location_on</span>Turku, Finland</p>
                            <p onClick={()=>{this.setState({location:"Oulu"})}}><span className="material-icons">location_on</span>Oulu, Finland</p>
                            <p onClick={()=>{this.setState({location:"Vaasa"})}}><span className="material-icons">location_on</span>Vaasa, Finland</p>
                        </div>
                        <div className="selectGuests">
                            <div>
                                <p>Adults</p>
                                <p>Ages 13 or above</p>
                                <div>
                                    <span class="material-icons" onClick={()=>this.adult("-")}>keyboard_arrow_left</span>
                                    <span className="number">{this.state.adult}</span>
                                    <span class="material-icons" onClick={()=>this.adult("+")}>keyboard_arrow_right</span> 
                                </div>
                            </div>
                            <div>
                                <p>Children</p>
                                <p>Ages 2-12</p>
                                <div>
                                    <span class="material-icons" onClick={()=>this.child("-")}>keyboard_arrow_left</span>
                                    <span className="number">{this.state.child}</span>
                                    <span class="material-icons" onClick={()=>this.child("+")}>keyboard_arrow_right</span> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="firstHeader">
                    <div className="logoHeader">
                        <img className="logo" src={logo} />
                    </div>
                    <div className="searchContainer">
                        <div className="searches" onClick={()=>this.getWidth("naber")} >
                            <p className="pClass">Add Location</p>
                            <p className="pClass">Add Guest</p>
                            <span onClick={this.getBack} class="material-icons searchIcon">search</span>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            </div>
        )
    }
}
