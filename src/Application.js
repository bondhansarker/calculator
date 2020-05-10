import React, {Component} from 'react';
import Highscore from './Highscore';
import './css/style.css';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      overTen: false
    }
  }

  handleClick = () => {
    //console.log("clicked");
    this.setState({count: this.state.count + 1})
  }

  componentDidUpdate(props, state) {
    //console.log("update from ",state," to ",this.state);
    if (this.state.count > 10 && this.state.count !== state.count && !this.state.overTen) {
      // console.log("Updated");
      this.setState({overTen: true});
    }
  }

  resetCount = (event) => {
    //console.log(event);
    this.setState(
      {
        count: 0,
        overTen: false
      }
    )
  }

  render() {
    let {count} = this.state

    return (
      <div>
        <h1> You clicked this button {count} times </h1>
        <Highscore
          overTen={this.state.overTen}
          onReset={this.resetCount}
        />
        <span>
          <button onClick={() => this.handleClick()}>Click me</button>
        </span>
      </div>
    );
  }

}
export default Application;