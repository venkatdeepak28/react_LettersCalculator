// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {value: ''}

  changeValue = props => {
    this.setState({value: props.target.value})
  }

  render() {
    const {value} = this.state
    const givenValue = value.length
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="main-heading">
            Calculate the Letters you <br /> enter
          </h1>
          <label className="para" htmlFor="value">
            Enter the Phrase
          </label>
          <input
            type="text"
            id="value"
            value={value}
            className="input-el"
            placeholder="Enter a phrase"
            onChange={this.changeValue}
          />
          <div className="letter-container">
            <p className="letter-para">No.of letters: {givenValue}</p>
          </div>
        </div>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
