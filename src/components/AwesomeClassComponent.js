
import React, {Component} from 'react'

class AwesomeClassComponent extends Component {
  constructor() {
    super()
    this.state = {
      color: "pink"
    }
  }

  changeColor = () => {
    this.setState({color: "orange"})
  }

  render() {
    return (
      <div
        style={{color: this.state.color,
                fontWeight: "bold",
                fontSize: "30px",
                textAlign: "center"}}
        onClick={this.changeColor}
      >
        My name is Hai Nguyen
      </div>
    )
  }
}

export default AwesomeClassComponent
