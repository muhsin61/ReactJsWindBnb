import React, { Component } from 'react'
import './Search.css'
export default class Search extends Component {
    state = {
        boyut:true,
        searchClass: "find ",
        addNew:"add ",
        pClass:"pClass ",
        selectInfo:"hidden ",
        adult:0 ,
        child:0,
        location: "deneme",
    }
    handleChange = (event) => {
        this.setState({location: event.target.value})
    }
    getWidth = (deneme) => {
        console.log("naber" + deneme)
        this.setState({
            searchClass: this.state.searchClass + "widht ",
            addNew : this.state.addNew + "addNew ",
            pClass: this.state.pClass + "hidden",
            selectInfo:" ",
        })
    }
    getBack = () =>{
        console.log("geri gel")
        this.props.select(this.state.adult + this.state.child , this.state.location)
        this.setState({
            searchClass:"find ",
            pClass: "pClass ",
            addNew : "add ",
            selectInfo:"hidden ",
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
                <div className={this.state.searchClass} >
                    <p onClick={()=>this.getWidth("naber")} className={this.state.pClass}>Add Location</p>
                    <div className={this.state.addNew}>
                        <label>Location</label>
                        <input type="text" value={this.state.location} onChange={this.handleChange} placeholder="Location"></input>
                    </div>
                    <p className={this.state.pClass}>Add Guest</p>
                    <div className={this.state.addNew}>
                        <label>Guests</label>
                        <input type="number" value={this.state.adult + this.state.child} placeholder="Add Guest"></input> 
                    </div>
                    <span onClick={this.getBack} class="material-icons searchIcon">search</span>
                </div>
            </div>
                <div className={this.state.selectInfo}>
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
        )
    }
}
