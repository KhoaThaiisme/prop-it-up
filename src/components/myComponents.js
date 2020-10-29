import React, { Component } from "react";



class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
            commt: ""
        }
    }
    addAge = () => {
        this.state.age += 1;
        this.setState({ age: this.state.age })
        if (this.state.age >= 60) {
            this.setState({ commt: "Wow, you've grown up that well!!!" })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.firstName} {this.props.lastName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair color: {this.props.hairColor}</p>
                <button onClick={this.addAge}>Add</button>
                <p>{this.state.commt}</p>
            </div>
        )
    }
}

export default PersonCard;