import React from "react"; 
import ReactDOM from "react-dom"; 
import "./index.css"

export default class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = { list: ""}; //set the list to empty string

    }

    //declare the componentDidMount to set the value of list
    //to "apples when page just loads
    
    componentDidMount() {
        this.setState({
            list: "apples", 
        })
    }

    //arrow function that will help adding a new item in shoppinglist 
    addToList = () => {
        let input = document.getElementById("inputField").value;
        let updatedList = this.state.list + "\n" + input; 
        this.setState({list: updatedList})
        //reset the input box to an empty string after submit
        document.getElementById("inputField").value = ""; 
    }

    //arrow function that will remove an item from the shopping list
    removeFromList = () => {
        let input = document.getElementById("inputField").value; 
        let filteredList = this.state.list.replace("\n" + input, ""); 
        this.setState({list: filteredList}); 
        //reset the input box to an empty string after submit
        document.getElementById("inputField").value = ""; 
    }

    //declare an arrow function that used to reset the list 
    resetList = () => {
        this.setState({list: "apples"})
    }

    render() {
        return(
            <div id="counter">
                <h3>{this.state.list}</h3>
                <div className="controls">
                    <input type="text" placeholder="Item name...." id="inputField"/>
                    <button onClick={this.addToList} style={{'font-weight': "bold"}}>Add to List</button>
                    <button onClick={this.removeFromList} style={{'color': "red"}}>Remove from List</button>
                    {/* //the reset button should be disabled whent the user has not yet modified the list 
                    //add the disabled prop to the input element. the prop should depend whether the list is in the default state.  */}
                    <button onClick={this.resetList} disabled={this.state.list=="apples"}>Reset List</button>
                </div>
            </div>
        ); 
    }
}

ReactDOM.render(<List />, document.getElementById("root"));  