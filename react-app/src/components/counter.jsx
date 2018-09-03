import React, { Component } from "react";
import Counters from "./counters";
class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"]
    // imageUrl: "https://picsum.photos/50" //APP-1
  };
  //APP-2
  //  styles={
  //   fontSize: 20,
  //   fontWeight:"bold"
  // }

  //APP-7
  // constructor() {
  //   //here we have access to this and also here first we need to call super constructor of the component
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this); //returns another function which can be set again
  // }
  //APP-7
  // handleIncrement() {
  //   //In the event handles this ususally is differnt-here we dont have access to 'this'
  //   //Eg: if function is called as a part of  method in an object, then it returns refernce to that obj
  //   //if it is called like a standalone fun like function(), then it refers to window obj. But if strict mode is enabled, then it would return undefined
  //   //so to access this, we use constructor and use bind method OR we can convert this function into an arrow function
  //   console.log("Clicked", this.state.count);// APP-7
  // }
  //APP-8
  // handleIncrement = product => {
  //   console.log(product);
  //   // console.log("Clicked", this.state.count);
  //   //usually ++ doesn't work because in react we don't modify the state directly
  //   //we need to use setState() which tells react that we are updating the state and then it will bring the virtual dom in sync with real dom(meaning tell react explicitly what's being changed)
  //   //In angular, it automatically detects changes as all events in browser are monkey patched, when changes happen, angular runs its change detection algorithm and updates view accordingly
  //   this.setState({ count: this.state.count + 1 }); //overrides existing state property
  // };
  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // }; APP-8
  handleIncrement = product => {
    this.setState({ value: this.state.value + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>No tags!</p>;
    return (
      // <ul>
      //   {this.state.tags.map(tag => (
      //     <li key={tag}>{tag}</li>
      //     // or if they are objects then it should be tag.id to uniquely identify the objects which are unique in that list
      //   ))}
      // </ul> APP-
      <div>
        <h4>{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          //APP-8// onClick={this.doHandleIncrement} // we are passing a reference not the method
          onClick={() => this.handleIncrement({ id: this.state.value + 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
      //APP-8: Method 1: in onClick event we passed a reference, if we want to pass parameters then we need to use another method, pass this ref to that method and finally in our onlick, pass the new ref
      //Method 2: simply pass arrow function in curly braces
    );
  }
  render() {
    // console.log(this.props); //includes all attrs in counters component ... value &selected are part of this props
    // let classes = this.getBadgeClasses(); APP-4
    return (
      <div>
        {/* <img src={this. state.imageUrl} alt="" />// APP-1 */}
        {/* <span style={this.styles} className="badge badge-warning m-2"> {this.formatCount()} </span>  APP-2 */}
        {/* <span style={{fontSize:30}} className="badge badge-warning m-2"> {this.formatCount()} </span>  APP-3 */}
        {/* <span style={this.styles} className={classes}> {this.formatCount()} </span>  APP-4 */}
        {/* <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button className="btn btn-secondary btn-sm">Increment</button> APP-5 */}
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}APP-6 */}
        {this.renderTags()}
      </div>
    );
  }
  // APP-4, APP-5
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
